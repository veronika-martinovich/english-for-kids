import { state } from "./state";
import { generatePage } from "../js/pages_functions/generatePage";

export const router = {
  initializeRoute: function() {
    history.replaceState({page: `${state.page}`}, '', `${state.page}`);
  },

  changeRoute: function() {
    history.pushState({page: `${state.page}`}, '', `${state.page}`);
  }
}

router.initializeRoute();

window.onpopstate = function(e) {
  if (e.state) {
    state.page = e.state.page;
    generatePage(state.page);
  }
}
