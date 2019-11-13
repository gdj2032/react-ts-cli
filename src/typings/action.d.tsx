interface IUserInfo {
    id?: string;
    username?: string;
    isLogin?: boolean;
}

interface IAppState {
    user: IUserInfo;
}
