import axios from "~/plugins/axios"

export const state = () => ({
    Items: []
})

export const mutations = {
    setItems(state, Items) {
        state.Items = Items
    }
}
export const actions = {
    async nuxtServerInit({commit}) {
        const response = await axios.get('https://api.myjson.com/bins/x0jsb')
        const Items = response.data.Items

    commit("setItems", Items)
    }
}
