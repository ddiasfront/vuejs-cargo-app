<template>
  <div>
    <div class>
      <h3 class="mainTitle">Status</h3>
      <div class="mainContent row" v-for="(history, key) in historyStatusData" v-bind:key="key">
        <div class="">
          <div class="col-12">
            <span class="circleStatus"></span>
          </div>
          <div class="col-12 flex center-content">
            <span class="lineStatus"></span>
          </div>
        </div>
        <div class="justify-content-start">
          {{history.translation}}
          {{formatUnixStamp(history.at)}}
        </div>
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
