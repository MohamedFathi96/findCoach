export default {
  namespaced: true,
  lastFetched: null,
  state() {
    return {
      coaches: [
        {
          id: 1,
          firstName: "mohamed",
          lastName: "ahmed",
          description: "asdlkfjlkdsa",
          majors: ["frontend"],
        },
      ],
    };
  },
  getters: {
    coaches(state) {
      return state.coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    isCoach(state, getters, globalState, globalGetters) {
      const userId = globalGetters.userId;
      return state.coaches.some((coach) => coach.id === userId);
    },
    shouldUpdate(state) {
      if (!state.lastFetched) return true;
      const currentTimeStamp = new Date().getTime();

      return (currentTimeStamp - state.lastFetched) / 1000 > 60;
    },
  },
  mutations: {
    setLastFetched(state) {
      state.lastFetched = new Date().getTime();
    },
    registerCoach(state, payload) {
      if (Array.isArray(payload)) {
        state.coaches = payload;
      } else {
        state.coaches.push(payload);
      }
    },
  },
  actions: {
    async newCoach(context, coachInfo) {
      const userId = context.rootGetters.userId;

      const responce = await fetch(
        `https://vue-demo-a1ca2-default-rtdb.firebaseio.com/coaches/${userId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(coachInfo),
          "Contect-Type": "application/json",
        }
      );

      try {
        if (!responce.ok) {
          throw new Error(responce.message || "Failed to register");
        }
      } catch (error) {
        console.log(error.message);
      }
      context.commit("registerCoach", {
        ...coachInfo,
        id: userId,
      });
    },

    async getCoaches(context, forceReload = false) {
      if (!forceReload && !context.getters.shouldUpdate) return;
      const responce = await fetch(
        "https://vue-demo-a1ca2-default-rtdb.firebaseio.com/coaches.json"
      );
      if (!responce.ok) {
        throw new Error(responce.message || "Failed to fetch the coaches");
      }
      const responceData = await responce.json();
      const coaches = [];
      for (const key in responceData) {
        coaches.push({
          id: key,
          ...responceData[key],
        });
      }
      context.commit("registerCoach", coaches);
      context.commit("setLastFetched");
    },
  },
};
