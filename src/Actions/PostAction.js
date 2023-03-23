import * as PostApi from '../API/PostRequest'


export const getTimelinePosts = (id) => async (dispatch) => {
	dispatch({ type: "RETREIVING_START" });
	try {
		const { data } = await PostApi.getTimelinePosts(id);
		dispatch({ type: "RETRIEVING_SUCCESS", data: data });
	} catch (error) {
		dispatch({ type: "RETRIEVING_FAIL" });
        console.log(error);
	}
};
