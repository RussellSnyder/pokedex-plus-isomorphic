import { QueryParam, SerializedQueryParam } from './query-param';

// export type QueryParamMap<T> = Map<T, QueryParam<T, any>>;
export type QueryParams<T extends string | number | symbol> = { [key in T]: QueryParam<any> };
export type ActiveParams<T extends string | number | symbol> = { [key in T]: any }

export class QueryParamCollection<T extends string | number | symbol> {
  // This contains only the query params with values set
  // gets value when accessed (not query params)
  // This makes is easier to work with values in Angular templates
  activeParams: ActiveParams<T>;
  // This contains ALL of the query params regardless of their state
  // gets query param when accessed (not values)
  private queryParams: QueryParams<T>;

  constructor(queryParams: QueryParams<T>) {
    this.queryParams = queryParams;
    this.activeParams = this.getActiveQueryParams();
  }

  updateQueryParamsFromSerialized = (serializedQueryParam?: SerializedQueryParam): void => {
    if (!serializedQueryParam) {
      return;
    }

    Object.entries(serializedQueryParam).forEach(([key, value]) => {
      const queryParam = this.getQueryParamFromSerializedKey(key);
      const label = this.getLabelFromSerializedKey(key);

      if (queryParam && label) {
        queryParam.setSerializedValue(value);
        this.queryParams[label] = queryParam;
      }
    });

    this.updateActiveQueryParams();
  };

  updateQueryParam = (label: T, value: any): void => {
    const queryParam = this.getQueryParamByLabel(label);

    queryParam.setValue(value);

    this.queryParams[label] = queryParam;

    this.updateActiveQueryParams();
  };

  getQueryParamByLabel = (key: T): QueryParam<any> => {
    return this.queryParams[key];
  };

  getLabelFromSerializedKey = (key: string): T | undefined => {
    const filteredLabels = [...Object.entries(this.queryParams)]
      .filter(([, queryParam]) => (queryParam as QueryParam<any>).serializedKey === key)
      .map(([k]) => k);

    if (filteredLabels.length === 0) {
      return;
    }

    return filteredLabels[0] as T;
  };

  getQueryValueByLabel = (key: T): any | undefined => {
    const queryParam = this.queryParams[key];
    if (!queryParam) {
      return;
    }

    return queryParam.value;
  };

  getQueryParamFromSerializedKey = (key: string): QueryParam<any> | undefined => {
    return [...Object.values(this.queryParams) as QueryParam<any>[]].find((q) => {
      return q.serializedKey === key;
    });
  };

  getSerializedQueryParams = (): { [key: string]: string } => {
    return [...Object.values(this.queryParams) as QueryParam<any>[]].reduce(
      (encoded, query) => ({
        ...encoded,
        ...query.getSerializedQuery(),
      }),
      {},
    );
  };

  getSerializedQueryParamsWithValues = (): { [key: string]: string } => {
    return [...Object.values(this.queryParams) as QueryParam<any>[]]
      .filter((v) => v.serializedValue !== '')
      .reduce(
        (encoded, query) => ({
          ...encoded,
          ...query.getSerializedQuery(),
        }),
        {},
      );
  };

  getActiveQueryParams = (): ActiveParams<T> => {
    return [...Object.entries(this.queryParams)]
      .filter(([, queryParam]) => (queryParam as QueryParam<any>).serializedValue && (queryParam as QueryParam<any>).serializedValue !== '')
      .reduce(
        (prev, [label, queryParam]) => ({
          ...prev,
          [label]: (queryParam as QueryParam<any>).value,
        }),
        {},
      ) as ActiveParams<T>;
  };

  getLabelValueObject = (): ActiveParams<T> => {
    if (!this.queryParams) {
      return {} as ActiveParams<T>;
    }
    return [...Object.entries(this.queryParams)].reduce(
      (prev, [label, queryParam]) => ({
        ...prev,
        [label]: (queryParam as QueryParam<any>).value,
      }),
      {},
    ) as ActiveParams<T>;
  };

  private updateActiveQueryParams(): void {
    this.activeParams = this.getActiveQueryParams();
  }
}
