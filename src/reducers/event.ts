//interface


//로그인
export const GET_INFO = "GET_INFO";

const initialState: any = {
    name: "",
    isAddClicked: false,
    isConfigClicked: false
}

const event = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_INFO:
            return state;
        default:
            return state;
    }
}

export default event;