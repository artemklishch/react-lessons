<template>
  <div>
    <input @input="$emit('input', $event.target.value)" />
  </div>
</template>
