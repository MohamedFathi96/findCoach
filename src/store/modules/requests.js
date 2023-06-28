export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    requests(state, getters, globalState, globalGetters) {
      const requests = state.requests.filter(
        (request) => request.coachId == globalGetters.userId
      );
      return requests;
    },
  },
  mutations: {
    coachRequest(state, reqestPayload) {
      if (Array.isArray(reqestPayload)) {
        state.requests = reqestPayload;
      } else {
        state.requests.push(reqestPayload);
      }
    },
  },
  actions: {
    async fetchRequests(context) {
      const coachId = context.rootGetters.userId;
      const responce = await fetch(
        `https://vue-demo-a1ca2-default-rtdb.firebaseio.com/requests/${coachId}.json`
      );

      if (!responce.ok) {
        throw new Error(responce.message || "Failed to fetch the requests");
      }
      const responceData = await responce.json();
      if (responceData) {
        context.commit("coachRequest", Object.values(responceData));
      } else {
        context.commit("coachRequest", []);
      }
    },

    async coachRequest(context, requestPayload) {
      const responce = await fetch(
        `https://vue-demo-a1ca2-default-rtdb.firebaseio.com/requests/${requestPayload.coachId}.json`,
        {
          method: "POST",
          body: JSON.stringify(requestPayload),
          "Contect-Type": "application/json",
        }
      );
      if (!responce.ok) {
        throw new Error(responce.message || "Failed to send the request");
      }

      const responceData = await responce.json();

      requestPayload.id = responceData.name;

      context.commit("coachRequest", requestPayload);
    },
  },
};
