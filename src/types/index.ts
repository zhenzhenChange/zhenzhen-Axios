export type Methods =
  | 'get'
  | 'put'
  | 'post'
  | 'head'
  | 'patch'
  | 'delete'
  | 'options'
  | 'GET'
  | 'PUT'
  | 'POST'
  | 'HEAD'
  | 'PATCH'
  | 'DELETE'
  | 'OPTIONS'

export interface AxiosConfig {
  url: string
  data?: any
  params?: any
  method?: Methods
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResult {
  data: any
  status: number
  config: AxiosConfig
  headers: any
  request: any
  statusText: string
}

export interface AxiosPromise extends Promise<AxiosResult> {}
