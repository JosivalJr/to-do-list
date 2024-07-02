import styled from "styled-components";

const TaskAppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);

  h1 {
    font-weight: 700;
    text-align: center;
    padding: 1rem 0;
  }

  .task-container-list {
    padding: 1rem 0;
    max-height: 60vh;
    overflow-y: auto;
  }

  .task-manage-list {
    display: flex;
    justify-content: space-between;
  }

  .sort-container > span {
    font-weight: 450;
    font-size: 0.8rem;
  }
  .sort-container > .icon-btn {
    padding: 0 0.25rem;
  }

  }

  input {
    box-sizing: border-box;
  }

  input[type="text"],
  select,
  textarea {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
  }

  .task-container {
    margin: 0 0.5rem 1rem 0;
    padding-right: 0.5rem;
    border-radius: 5px;

    div:first-child {
      padding: 10px 0 10px 10px;
      border-radius: 8px;
    }

    .task-header {
      display: flex;
      justify-content: space-between;
      padding: 0.25rem 0;

      h4 {
        font-weight: 500;
      }

      .icon-btn {
        padding: 0 0.25rem;
      }
    }

    .task-description-container {
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 5px;
      min-height: 5rem;
      font-weight: 300;
      font-size: 0.8em;
      padding: 10px;
    }

    .task-due-date-container {
      font-weight: 300;
      font-size: 0.8rem;
      padding-top: 10px;
    }
  }

  .create-task-btn-container {
    display:flex;
    padding: 1rem;
    justify-content: end;
  }

  .create-task-container {
  
    max-width: 300px;
    form {
      label {
        font-weight: 300;
        font-size: 0.8em;
      }

      input {
        width: 100%;
      }

      input[type="date"]::-webkit-clear-button {
          display: none;
      }

      input[type="date"]::-webkit-inner-spin-button { 
          display: none;
      }

      input[type="date"]::-webkit-calendar-picker-indicator {
          color: #2c3e50;
      }

      input[type="date"] {
          appearance: none;
          -webkit-appearance: none;
          color: #95a5a6;
          border:1px solid #ecf0f1;
          background:#ecf0f1;
          padding:5px;
          display: inline-block !important;
          visibility: visible !important;
      }

      input[type="date"], focus {
          color: #95a5a6;
          box-shadow: none;
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
      }

      .create-task-btn {
        display:flex;
        justify-content: end;
        padding-top: 1.2rem;
      }
    }
  }
`;

export { TaskAppContainer };
