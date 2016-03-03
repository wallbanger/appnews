import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE } from '../actions/constants'
import AppDispatcher from '../dispatcher'

class ArticleStore extends SimpleStore {
    constructor(initialState) {
        super(initialState)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.delete(data.id)
                    this.emitChange()
                    break;
            }
         })
    }
}

export default ArticleStore