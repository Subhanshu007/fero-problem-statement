export const state = () => {
    return {
        weatherReport: undefined
    }
}
export const  mutations = {
    updateWeatherReport(state, data){
        return state.weatherReport = data;
    }
}

export const actions = {
    async getWeatherReport({commit}, data){
        const res = await this.$axios.get(`${process.env.BASE_URL_ONE}&q=${data}&aqi=no`)
        await commit('updateWeatherReport',data);
        return res;
    }
}