interface IRouteOption {
  component?: any;
  path?: string;
  exact?: boolean;
  redirect?: string;
  title?: string;
  children?: IRouteOption[];
  icon?: string;
}
