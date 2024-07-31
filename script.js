const app = Vue.createApp({
  data() {
    return {
      contents: "",
      school: "",
      grade: "",
      subjects: "",
      name: "",
      year: "",
      fm: "",
      frames: [
        { id: 1, value: "frame-1.svg", label: "ប្រភេទ 1" },
        { id: 2, value: "frame-2.png", label: "ប្រភេទ 2" },
        { id: 3, value: "frame-3.png", label: "ប្រភេទ 3" },
        { id: 4, value: "frame-4.png", label: "ប្រភេទ 4" },
        { id: 5, value: "frame-5.png", label: "ប្រភេទ 5" },
        { id: 6, value: "frame-6.png", label: "ប្រភេទ 6" },
        { id: 7, value: "frame-7.png", label: "ប្រភេទ 7" },
        { id: 8, value: "frame-8.png", label: "ប្រភេទ 8" },
        { id: 9, value: "frame-9.png", label: "ប្រភេទ 9" },
        { id: 10, value: "frame-10.png", label: "ប្រភេទ 10" },
      ],
    };
  },
  computed: {
    allsubjects: {
      get() {
        return this.subjects.split(",");
      },
    },
    main_school: {
      get() {
        return this.school;
      },
      set(newValue) {
        this.school = newValue;
      },
    },
  },
  methods: {
    printResult() {
      window.print();
    },
    clearResult() {
      this.school = "";
      this.grade = "";
      this.subjects = "";
      this.name = "";
      this.year = "";
      this.fm = "";
      this.contents = "";
    },
    checkinputs() {
      if (
        this.school == "" ||
        this.grade == "" ||
        this.subjects == "" ||
        this.name == "" ||
        this.year == "" ||
        this.fm == ""
      ) {
        return true;
      } else {
        return false;
      }
    },
    showResult() {
      this.contents = "";
      this.allsubjects.forEach((sub) => {
        this.contents +=
          "<div class='cover'><img src='img/" +
          this.fm +
          "' alt='Frames' class='absolute' /><h4>" +
          this.school +
          "</h4><h4>ថ្នាក់ទី: <span>" +
          this.grade +
          "</span></h4><h4>សៀវភៅ: <span>" +
          sub +
          "</span></h4><h4>ឈ្មោះ: <span>" +
          this.name +
          "</span></h4><h4>ឆ្នាំសិក្សា: <span>" +
          this.year +
          "</span></h4></div>";
      });
    },
  },
});

app.mount("#app");
