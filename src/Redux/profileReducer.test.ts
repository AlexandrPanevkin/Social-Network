import {addPostAC, postsType, profileReducer, ProfileType} from "./profileReducer";

it('new post should be added', () => {
    let action = addPostAC('lalala')
    let state = {
        posts: [
            {id: 1, message: 'post1', likesCount: 7},
            {id: 2, message: 'post2', likesCount: 2},
            {id: 3, message: 'post3', likesCount: 4},
        ] as postsType[],
        newPostText: '',
        profile: null as ProfileType | null,
        status: ''
    }
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})