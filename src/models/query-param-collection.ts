import { QueryParam, SerializedQueryParam } from './query-param';

// export type QueryParamMap<T> = Map<T, QueryParam<T, any>>;
export type QueryParamCollectionType<KV extends string | number | symbol> = { [K in keyof KV]: QueryParam<KV[K]> };

type TypedQueryParam<T> = QueryParam<T>;

export type TypedQueryParamLookup<LabelTypeMap> = {
  [K in keyof LabelTypeMap]: TypedQueryParam<LabelTypeMap[K]>
}

type ValueOf<T> = T[keyof T];

export type IncompleteMap<LabelTypeMap> = {
  [Label in keyof LabelTypeMap]?: LabelTypeMap[Label];
}

export class QueryParamCollection<LabelTypeMap> {
  // This contains only the query params with values set
  // gets value when accessed (not query params)
  // This makes is easier to work with values in Angular templates
  activeParams: IncompleteMap<LabelTypeMap>;
  // This contains ALL of the query params regardless of their state
  // gets query param when accessed (not values)
  private queryParams: TypedQueryParamLookup<LabelTypeMap>;

  constructor(queryParams: TypedQueryParamLookup<LabelTypeMap>) {
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

  updateQueryParam = (label: keyof LabelTypeMap, value: LabelTypeMap[typeof label]): void => {
    const queryParam = this.getQueryParamByLabel(label);
    queryParam.setValue(value);

    this.queryParams[label] = queryParam;

    this.updateActiveQueryParams();
  };

  updateQueryParams = (labelValue: IncompleteMap<LabelTypeMap>): void => {
    [...Object.entries(labelValue)]
      .forEach(([label, value]) => {
        const typedLabel = label as keyof LabelTypeMap;
        const typedValue = value as LabelTypeMap[typeof typedLabel];

        const queryParam = this.getQueryParamByLabel(typedLabel);
        queryParam.setValue(typedValue);
      })

    this.updateActiveQueryParams();
  };

  getQueryParamByLabel = (label: keyof LabelTypeMap): TypedQueryParam<LabelTypeMap[typeof label]> => {
    return this.queryParams[label];
  };

  getLabelFromSerializedKey = (key: string): keyof LabelTypeMap | undefined => {
    const filteredLabels = [...Object.entries(this.queryParams)]
      .filter(([, queryParam]) => (queryParam as QueryParam<ValueOf<LabelTypeMap>>).serializedKey === key)
      .map(([k]) => k);

    if (filteredLabels.length === 0) {
      return;
    }

    return filteredLabels[0] as keyof LabelTypeMap;
  };

  getQueryValueByLabel = (key: keyof LabelTypeMap): ValueOf<LabelTypeMap> | undefined => {
    const queryParam = this.queryParams[key];
    if (!queryParam) {
      return;
    }

    return queryParam.value;
  };

  getQueryParamFromSerializedKey = (key: string): QueryParam<ValueOf<LabelTypeMap>> | undefined => {
    return [...Object.values(this.queryParams) as QueryParam<ValueOf<LabelTypeMap>>[]].find((q) => {
      return q.serializedKey === key;
    });
  };

  getSerializedQueryParams = (): { [key: string]: string } => {
    return [...Object.values(this.queryParams) as QueryParam<ValueOf<LabelTypeMap>>[]].reduce(
      (encoded, query) => ({
        ...encoded,
        ...query.getSerializedQuery(),
      }),
      {},
    );
  };

  getSerializedQueryParamsWithValues = (): { [key: string]: string } => {
    return [...Object.values(this.queryParams) as QueryParam<ValueOf<LabelTypeMap>>[]]
      .filter((v) => v.serializedValue !== '')
      .reduce(
        (encoded, query) => ({
          ...encoded,
          ...query.getSerializedQuery(),
        }),
        {},
      );
  };

  getActiveQueryParams = (): IncompleteMap<LabelTypeMap> => {
    return [...Object.entries(this.queryParams)]
      .filter(([, queryParam]) => (queryParam as QueryParam<ValueOf<LabelTypeMap>>).serializedValue && (queryParam as QueryParam<ValueOf<LabelTypeMap>>).serializedValue !== '')
      .reduce(
        (prev, [label, queryParam]) => ({
          ...prev,
          [label]: (queryParam as QueryParam<ValueOf<LabelTypeMap>>).value,
        }),
        {},
      )
  };

  getLabelValueObject = (): LabelTypeMap => {
    if (!this.queryParams) {
      return {} as LabelTypeMap;
    }
    return [...Object.entries(this.queryParams)].reduce(
      (prev, [label, queryParam]) => ({
        ...prev,
        [label]: (queryParam as QueryParam<any>).value,
      }),
      {},
    ) as LabelTypeMap;
  };

  private updateActiveQueryParams(): void {
    this.activeParams = this.getActiveQueryParams();
  }
}
