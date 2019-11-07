interface IUserInfo {
    configCenterUserId?: string;
    username?: string;
    perm?: number[];
    isLogin: boolean;
}

interface IAppState {
    user: IUserInfo;
}
