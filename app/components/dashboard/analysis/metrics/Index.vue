<script setup>
const { t } = useI18n()

const tabs = {
  utm: ['utm_source', 'utm_medium', 'utm_campaign'],
  location: ['country', 'region', 'city'],
  referer: ['referer', 'slug'],
  time: ['language', 'timezone'],
  device: ['device', 'deviceType'],
  browser: ['os', 'browser', 'browserType'],
}

const translatedTabs = computed(() => ({
  utm: tabs.utm.map(tab => t(`dashboard.metrics.${tab}`)),
  location: tabs.location.map(tab => t(`dashboard.metrics.${tab}`)),
  referer: tabs.referer.map(tab => t(`dashboard.metrics.${tab}`)),
  time: tabs.time.map(tab => t(`dashboard.metrics.${tab}`)),
  device: tabs.device.map(tab => t(`dashboard.metrics.${tab}`)),
  browser: tabs.browser.map(tab => t(`dashboard.metrics.${tab}`)),
}))
</script>

<template>
  <main
    class="
      grid gap-8
      lg:grid-cols-12
    "
  >
    <LazyDashboardAnalysisMetricsLocations
      class="
        col-span-1
        lg:col-span-8
      "
    />
    <DashboardAnalysisMetricsGroup
      class="lg:col-span-4"
      :tabs="translatedTabs.location"
      :raw-tabs="tabs.location"
    />
    <DashboardAnalysisMetricsGroup
      class="lg:col-span-6"
      :tabs="translatedTabs.referer"
      :raw-tabs="tabs.referer"
    />
    <DashboardAnalysisMetricsGroup
      class="lg:col-span-6"
      :tabs="translatedTabs.time"
      :raw-tabs="tabs.time"
    />
    <DashboardAnalysisMetricsGroup
      class="lg:col-span-6"
      :tabs="translatedTabs.device"
      :raw-tabs="tabs.device"
    />
    <DashboardAnalysisMetricsGroup
      class="lg:col-span-6"
      :tabs="translatedTabs.browser"
      :raw-tabs="tabs.browser"
    />
    <DashboardAnalysisMetricsGroup
      class="lg:col-span-12"
      :tabs="translatedTabs.utm"
      :raw-tabs="tabs.utm"
    />
  </main>
</template>
