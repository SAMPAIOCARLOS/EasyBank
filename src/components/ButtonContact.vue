<script>
  export default {
    name: 'ButtonContact'
  }
</script>

<template>
    <button>
      Request invite
    </button>
</template>

<style scoped>
button {
  background: linear-gradient(45deg, rgb(66, 211, 182), rgb(94, 239, 210));
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-weight: bold;
}

button:hover {
  background: linear-gradient(45deg, rgb(41, 241, 201), rgb(21, 197, 162));
  transform: scale(1.05);
}

/* Optional: add a subtle animation when button first appears */
@keyframes button-appear {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

button {
  animation: button-appear 0.5s ease;
}








</style>
