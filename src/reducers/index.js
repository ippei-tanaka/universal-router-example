import ui from '@/reducers/ui';

export default (state = {}, action) => ({
    ui: ui(state.ui, action),
});