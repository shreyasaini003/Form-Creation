import React from 'react';
import './style.css';

function App() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const changeButtonColor = (button) => {
    button.style.backgroundColor = "black";
  };

  const secondSelectOption = (option) => {
    //...
  };

  const secondNextPage = () => {
    //...
  };

  const thirdNextPage = () => {
    //...
  };

  const selectOption = (option) => {
    //...
  };

  const [continueButtonColor, setContinueButtonColor] = React.useState(false);

  const handleContinueButtonClick = () => {
    setContinueButtonColor(true);
  };

  const handleSecondContinueButtonClick = () => {
    //...
  };

  const handleThirdContinueButtonClick = () => {
    //...
  };

  const handleFourthContinueButtonClick = () => {
    //...
  };

  const handleFifthContinueButtonClick = () => {
    //...
  };

  const [option, setOption] = React.useState(null);

  const handleOptionClick = (event) => {
    setOption(event.target);
  };

  const handleContinueButtonClickFour = () => {
    //...
  };

  return (
    <div className="App">
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>

      {currentPage === 1 && (
        <div className="content">
          <div className="heading">Which describes you best?</div>
          <div className="subheading">
            <span style="color: grey;">This will help us personalize your experience.</span>
          </div>
          <div className="options">
            <div className="option-box">
              <input type="checkbox" id="student" hidden />
              <label htmlFor="student" onClick={selectOption}>
                <strong>Student</strong> or soon to be enrolled
              </label>
            </div>
            <div className="option-box">
              <input type="checkbox" id="professional" hidden />
              <label htmlFor="professional" onClick={selectOption}>
                <strong>Professional</strong> pursuing a career
              </label>
            </div>
            <div className="option-box">
              <input type="checkbox" id="parent" hidden />
              <label htmlFor="parent" onClick={selectOption}>
                <strong>Parent</strong> of a school-age child
              </label>
            </div>
            <div className="option-box">
              <input type="checkbox" id="lifelong-learner" hidden />
              <label htmlFor="lifelong-learner" onClick={selectOption}>
                <strong>Lifelong Learner</strong>
              </label>
            </div>
            <div className="option-box">
              <input type="checkbox" id="teacher" hidden />
              <label htmlFor="teacher" onClick={selectOption}>
                <strong>Teacher</strong>
              </label>
            </div>
            <div className="option-box">
              <input type="checkbox" id="other" hidden />
              <label htmlFor="other" onClick={selectOption}>
                <strong>Other</strong>
              </label>
            </div>
          </div>
          <button className="continue-button" id="continueButton" onClick={handle