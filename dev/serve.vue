<template>
    <div class="wrapper">
        <!-- <Datepicker v-model="selectedDate" placeholder="Select Date" /> -->
        <h1> Hello there we're testing here...</h1>
        <VueDatePickerMod v-model="end_date"  placeholder="Schedule For" auto-apply text-input :enable-time-picker="false" />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    // import Datepicker from '../src/VueDatePicker/VueDatePickerModified.vue';
    import VueDatePickerMod from '../src/VueDatePicker/VueDatePickerModified.vue';
    

    const selectedDate = ref();
    const end_date = ref()
</script>

<style lang="scss">
    @import 'src/VueDatePicker/style/main';
    .wrapper {
        padding: 200px;
    }
</style>
