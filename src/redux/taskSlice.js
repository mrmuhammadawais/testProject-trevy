// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   selectedContact: "",
//   inputPrompt: "",
//   tone: "",
//   length: 30,
//   generatedEmail: "",
//   selectedTemplates: [],
// };

// const promptSlice = createSlice({
//   name: "prompt",
//   initialState,
//   reducers: {
//     setPromptData: (state, action) => {
//       const { selectedContact, inputPrompt, tone, length } = action.payload;
//       state.selectedContact = selectedContact;
//       state.inputPrompt = inputPrompt;
//       state.tone = tone;
//       state.length = length;
//     },
//     generateMockEmail: (state) => {
//       const { inputPrompt, selectedContact, tone } = state;
//       state.generatedEmail = `Subject: Follow-up\n\nDear ${selectedContact},\n\n${inputPrompt}\n\nBest regards,\nYour Company`;
//     },
//     toggleSelectTemplate: (state, action) => {
//       const templateKey = action.payload;
//       if (state.selectedTemplates.includes(templateKey)) {
//         state.selectedTemplates = state.selectedTemplates.filter(
//           (key) => key !== templateKey
//         );
//       } else {
//         state.selectedTemplates.push(templateKey);
//       }
//     },
//     deleteSelectedTemplates: (state) => {
//       state.selectedTemplates = [];
//     },
//   },
// });

// export const {
//   setPromptData,
//   generateMockEmail,
//   toggleSelectTemplate,
//   deleteSelectedTemplates,
// } = promptSlice.actions;
// export default promptSlice.reducer;





import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedContact: "",
  inputPrompt: "",
  tone: "",
  length: 30,
  generatedEmail: "",
  selectedTemplates: [],
};

const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPromptData: (state, action) => {
      const { selectedContact, inputPrompt, tone, length } = action.payload;
      state.selectedContact = selectedContact;
      state.inputPrompt = inputPrompt;
      state.tone = tone;
      state.length = length;
    },
    generateMockEmail: (state) => {
      const { inputPrompt, selectedContact, tone } = state;
      state.generatedEmail = `Subject: Follow-up\n\nDear ${selectedContact},\n\n${inputPrompt}\n\nBest regards,\nYour Company`;
    },
    toggleSelectTemplate: (state, action) => {
      const templateKey = action.payload;
      if (state.selectedTemplates.includes(templateKey)) {
        state.selectedTemplates = state.selectedTemplates.filter(
          (key) => key !== templateKey
        );
      } else {
        state.selectedTemplates.push(templateKey);
      }
    },
    deleteSelectedTemplates: (state) => {
      state.selectedTemplates = [];
    },
    deleteTemplate: (state, action) => {
      const templateKey = action.payload;
      state.selectedTemplates = state.selectedTemplates.filter(
        (key) => key !== templateKey
      );
    },
  },
});

export const {
  setPromptData,
  generateMockEmail,
  toggleSelectTemplate,
  deleteSelectedTemplates,
  deleteTemplate, // Export the deleteTemplate action
} = promptSlice.actions;

export default promptSlice.reducer;
