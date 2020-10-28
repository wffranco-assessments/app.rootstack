<template>
  <div>
    <bs-header />
    <google-map
      :latitude="latitude"
      :longitude="longitude"
      :locations="locations"
      :apiKey="apiKey"
      :zoom="8"
      with-marker
    />
  </div>
</template>

<script>
import GoogleMap from 'vue-maps'
import { app } from '@/config.js'

const { apiKey } = app

export default {
  name: 'CreateJob',
  components: {
    GoogleMap,
  },
  data () {
    return {
      latitude: -33.950198,
      longitude: 151.259302,
      apiKey,
      locations: [
        {
          title: 'Bondi Beach',
          latitude: -33.890542,
          longitude: 151.274856,
        },
        {
          title: 'Coogee Beach',
          latitude: -33.923036,
          longitude: 151.259052,
        },
        {
          title: 'Cronulla Beach',
          latitude: -34.028249,
          longitude: 151.157507,
        },
        {
          title: 'Manly Beach',
          latitude: -33.80010128657071,
          longitude: 151.28747820854187,
        },
        {
          title: 'Maroubra Beach',
          latitude: -33.950198,
          longitude: 151.259302,
        },
      ],
    }
  },
}
</script>
