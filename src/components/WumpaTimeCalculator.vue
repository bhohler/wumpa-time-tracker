<template>
  <div id="tracker">
    <div class="summary-actions">
      <p>Total time elapsed: {{ timeElapsed }}</p>
      <p>Total time remaining: {{ timeRemaining }}</p>
      <div class="button-container">
        <button type="button" @click="addNewTime()">Add New Time</button>
        <button type="button" @click="clearAllTimes()">Clear All</button>
      </div>
    </div>

    <form id="times">
      <div class="time" v-for="(time, index) in times" :key="index">
        <input
          type="text"
          :name="'time_' + index"
          v-model="times[index]"
          @keyup="calculateTimes()"
          tabindex="1"
        />
        <button tabindex="0" type="button" @click="deleteTime(index)">
          Delete
        </button>
      </div>
    </form>

    <div class="summary-actions">
      <div class="button-container">
        <button type="button" @click="addNewTime()">Add New Time</button>
        <button type="button" @click="clearAllTimes()">Clear All</button>
      </div>
      <p>Total time elapsed: {{ timeElapsed }}</p>
      <p>Total time remaining: {{ timeRemaining }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WumpaTimeCalculator",
  data: function() {
    return {
      thirtyMinutes: 30 * 60,
      times: [] as string[],
      timeElapsed: "",
      timeRemaining: ""
    };
  },
  created(): void {
    const storedTimes = localStorage.getItem("times");

    this.times = storedTimes ? JSON.parse(storedTimes) : [""];

    this.calculateTimes();
  },
  methods: {
    calculateTimes(): void {
      localStorage.setItem("times", JSON.stringify(this.times));

      const totalSecondsElapsed = this.times
        .map(this.getTotalSeconds)
        .reduce(this.sum, 0);

      this.timeElapsed = this.secondsToString(totalSecondsElapsed);

      this.timeRemaining = this.secondsToString(
        this.thirtyMinutes - totalSecondsElapsed
      );
    },
    getTotalSeconds(time: string): number {
      time = time && time.trim();

      if (time && time.length >= 7) {
        const parts = time.split(/[^\d]+/);

        const minutes = Number(parts[0]) || 0;
        const wholeSeconds = Number(parts[1]) || 0;
        const partialSeconds = (Number(parts[2]) || 0) / 100;

        return minutes * 60 + wholeSeconds + partialSeconds;
      }

      return 0;
    },
    secondsToString(seconds: number): string {
      const totalMinutes =
        seconds >= 0 ? Math.floor(seconds / 60) : Math.ceil(seconds / 60);
      const totalLeftoverSeconds = Math.abs(seconds % 60);

      const minutesString = String(totalMinutes).padStart(2, "0");
      const secondsString = String(totalLeftoverSeconds.toFixed(2)).padStart(
        5,
        "0"
      );

      const prefix = totalMinutes === 0 && seconds < 0 ? "-" : "";

      return `${prefix}${minutesString}:${secondsString}`.replace(".", ":");
    },
    sum(x: number, y: number): number {
      return x + y;
    },
    clearAllTimes(): void {
      this.times = this.times.map(() => "");

      this.calculateTimes();
    },
    addNewTime(): void {
      this.times.push("");

      this.calculateTimes();
    },
    deleteTime(index: number): void {
      this.times.splice(index, 1);

      this.calculateTimes();
    }
  }
});
</script>

<style scoped lang="scss">
#times {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .time {
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-of-type) {
      margin-bottom: 0.5rem;
    }

    input {
      margin-right: 0.5rem;
    }
  }
}

.summary-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;

  .button-container {
    margin-bottom: 0.5rem;

    button:not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
}
</style>
