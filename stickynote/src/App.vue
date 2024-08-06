<template>
  <main>
    <div>
      <header>
        <h1>Sticky Note</h1>
        <button class="big-btn" @click="openOverlay">+</button>
      </header>
      <div class="card-container">
        <div
          v-for="note in NotesList"
          :key="note.id"
          class="card"
          :style="{ backgroundColor: note.backgroundColor, color: note.color }"
        >
          <button
            class="delete-btn"
            @click="deleteNote(note.id)"
          >
            &times;
          </button>
          <p class="card-note">
            {{ note.content }}
          </p>
          <p class="card-date">{{ note.date }}</p>
        </div>
      </div>
    </div>
    <div v-if="showForm" class="form-overlay">
      <div class="form-container">
        <div class="form-modal">
          <div class="form-header">
            <h2>Add Note?</h2>
            <button class="form-close-btn small-btn" @click="closeOverlay">
              &times;
            </button>
          </div>
          <p>{{ errorMessage }}</p>
          <textarea
            name="addnote"
            id="addnote"
            cols="30"
            rows="10"
            v-model="newNotes"
          ></textarea>
          <button @click="addingNote" class="form-save-btn">Save</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const showForm = ref(false);
const newNotes = ref("");
const NotesList = ref([]);
const errorMessage = ref("");

const openOverlay = () => {
  showForm.value = true;
};

const closeOverlay = () => {
  showForm.value = false;
  errorMessage.value = ""; 
};

const addingNote = () => {
  if (!newNotes.value) {
    errorMessage.value = "Please enter a note";
    return;
  }

  const bgColor = getRandomColor();
  NotesList.value.push({
    id: Date.now(),
    content: newNotes.value,
    date: new Date().toLocaleString("en-GB"),
    backgroundColor: bgColor,
    color: getContrastColor(bgColor),
  });
  newNotes.value = "";
  showForm.value = false;
  errorMessage.value = "";
};

const deleteNote = (id) => {
  NotesList.value = NotesList.value.filter((note) => note.id !== id);
};

const getRandomColor = () => {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  return randomColor;
};

const getContrastColor = (hexColor) => {
  // Remove the '#' character
  const hex = hexColor.slice(1);

  // Convert the hex color to RGB
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Calculate the luminance of the color
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Determine if the color is light or dark
  // Return black for light colors, white for dark colors
  return luminance > 186 ? "#000000" : "#FFFFFF";
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgb(39, 26, 26);
  color: white;
  border-radius: 5px;
}

.small-btn {
  background-color: rgb(95, 82, 82);
  color: white;
  border: oldlace;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 20px;
}

.big-btn {
  background-color: rgb(95, 82, 82);
  color: white;
  border: oldlace;
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 20px;
  margin: 0 20px;
}

.big-btn:hover,
.small-btn:hover {
  background-color: rgb(149, 131, 131);
  color: white;
  border: oldlace;
  cursor: pointer;
}

h1 {
  padding: 0 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;
}

.card {
  max-width: 255px;
  max-height: 255px;
  padding: 15px;
  margin: 15px 30px;
  background-color: gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
}

.card-note {
  text-align: justify;
  text-justify: inter-word;
}

.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container > .form-modal {
  background-color: white;
  padding: 0 20px;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
}

.form-save-btn {
  background-color: rgb(95, 82, 82);
  color: white;
  border: oldlace;
  font-size: 20px;
  padding: 7px 30px;
  border-radius: 20px;
  margin: 20px 0;
}

.form-save-btn:hover {
  background-color: rgb(149, 131, 131);
  color: white;
  border: oldlace;
  cursor: pointer;
}

.delete-btn {
  font-size: 20px;
  background-color: rgb(255, 255, 255);
  border: none;
  padding: 0 5px;
  border-radius: 10px;
}

.delete-btn:hover {
  cursor: pointer;
  background-color: rgb(241, 231, 231);
}
</style>
