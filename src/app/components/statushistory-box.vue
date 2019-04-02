<template>
  <div class="status-box">
    <h3 class="mainTitle">Status</h3>
    <div class="mainContent row" v-for="(history, key) in historyStatusData" v-bind:key="key">
      <div class>
        <div class="col-12">
          <span class="circleStatus" v-bind:class="{nextStep: key == 1, active: key == 0}"></span>
        </div>
        <div class="col-12 flex center-content">
          <span class="lineStatus" v-bind:class="{active: key == 0}"></span>
        </div>
      </div>
      <div class="justify-content-start">
        <p>{{history.translation}}</p>
        <p>{{formatUnixStamp(history.at)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  moment: moment,
  name: "historyStatuBox",
  props: ["historyStatusData"],
  methods: {
    formatUnixStamp(timeStamp) {
      return moment.unix(timeStamp).format("DD/MM/YYYY hh:mm");
    }
  }
};
</script>
