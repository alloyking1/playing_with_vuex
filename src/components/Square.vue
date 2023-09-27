<template>
    <div class="square">
      {{ $store.state.counter }}
      <sup>{{ $store.state.counter }}</sup>
      = {{ $store.getters.counterSquare }}
    </div>
</template>