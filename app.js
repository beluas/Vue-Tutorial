const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
		};
	},
	methods: {
		increment(num) {
			this.counter += num;
		},
		decrement(num) {
			this.counter -= num;
		},
		changeName(e, lastName) {
			this.name = e.target.value + " " + lastName;
		},
	},
});

app.mount("#events");
