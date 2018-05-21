import { FETCH_NOTES } from '../actions';

const body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas mauris sed nibh vulputate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultrices arcu sit amet pahetra. Duis et lectus acru. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, if finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, psuere in dolor. Phasellus maximus lacinia dolor eget laoreet. Morbi pellentesque euismod venenatis. Nulla ut nibh nunv. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. Ut egetas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt porttitor sem, sit amet ultricies lacus pellenteque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricities lorem. Nam pellentesque massa nisl, at pellenteque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus id neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl."

const initialState = {
    notes: [ 
        {title: 'Note Title', body: body, id: Date.now()},
        {title: 'Note Title', body: body,id: Date.now()},
        {title: 'Note Title', body: body, id: Date.now()},
        {title: 'Note Title', body: body, id: Date.now()},
        {title: 'Note Title', body: body, id: Date.now()},
        {title: 'Note Title', body: body, id: Date.now()},
        {title: 'Note Title', body: body, id: Date.now()},
        {title: 'Note Title', body: body, id: Date.now()},
        {title: 'Note Title', body: body, id: Date.now()}
     ],
    pending: false,
    error: null
}


export const notesReducer = (state = initialState, action) => {
    // console.log(state)
    switch(action.type) {
        case FETCH_NOTES:
            return (Object.assign({}, state, {notes: state.notes.slice()}))
        default: 
            return state;
           
    }
}