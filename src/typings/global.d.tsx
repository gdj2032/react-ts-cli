interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

interface IRequestParams {
    [key: string]: any;
}

interface IRequestOptions {
    path: string;
    method?: string;
    url?: string;
    credentials?: 'same-origin' | 'include';
    query?: IRequestParams;
    data?: IRequestParams;
    headers?: any;
    upload?: boolean;
}

interface menuOption {
    label: string;
    route: string;
    permissions?: number[];
    children?: menuOption[];
    icon?: string;
}

interface Common {
  id: string | number;
  name: string;
}
