import styled from "styled-components";
import { FontFamily, GlobalColors } from "../../global-files/variables";

export const Container = styled.div`
  z-index: 20;
  //@charset "UTF-8";
  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
  }
  .react-datepicker__aria-live {
    display: none;
  }
  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle {
    margin-left: -4px;
    position: absolute;
    width: 0;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::after,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::after {
    box-sizing: content-box;
    position: absolute;
    border: 8px solid transparent;
    height: 0;
    width: 1px;
    content: "";
    z-index: -1;
    border-width: 8px;
    left: -8px;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before {
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle {
    top: 0;
    margin-top: -8px;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::after {
    border-top: none;
    border-bottom-color: ${GlobalColors.s5};
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::after {
    top: 0;
  }
  .react-datepicker-popper[data-placement^="bottom"]
    .react-datepicker__triangle::before {
    top: -1px;
    border-bottom-color: #aeaeae;
  }

  .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle {
    bottom: 0;
    margin-bottom: -8px;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::after {
    border-bottom: none;
    border-top-color: #fff;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::after {
    bottom: 0;
  }
  .react-datepicker-popper[data-placement^="top"]
    .react-datepicker__triangle::before {
    bottom: -1px;
    border-top-color: #aeaeae;
  }

  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    width: 100%;
  }

  .react-datepicker {
    font-family: ${FontFamily.Lato};
    font-size: 0.8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
  }

  .react-datepicker--time-only .react-datepicker__triangle {
    left: 35px;
  }
  .react-datepicker--time-only .react-datepicker__time-container {
    border-left: 0;
  }
  .react-datepicker--time-only .react-datepicker__time,
  .react-datepicker--time-only .react-datepicker__time-box {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  .react-datepicker__triangle {
    position: absolute;
    left: 50px;
  }

  .react-datepicker-popper {
    z-index: 1;
  }
  .react-datepicker-popper[data-placement^="bottom"] {
    padding-top: 10px;
  }
  .react-datepicker-popper[data-placement="bottom-end"]
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement="top-end"]
    .react-datepicker__triangle {
    left: auto;
    right: 50px;
  }
  .react-datepicker-popper[data-placement^="top"] {
    padding-bottom: 10px;
  }
  .react-datepicker-popper[data-placement^="right"] {
    padding-left: 8px;
  }
  .react-datepicker-popper[data-placement^="right"]
    .react-datepicker__triangle {
    left: auto;
    right: 42px;
  }
  .react-datepicker-popper[data-placement^="left"] {
    padding-right: 8px;
  }
  .react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
    left: 42px;
    right: auto;
  }

  .react-datepicker__header {
    text-align: center;
    background-color: ${GlobalColors.s5};
    border-bottom: 1px solid #aeaeae;
    border-top-left-radius: 0.3rem;
    padding: 8px 0;
    position: relative;
  }
  .react-datepicker__header--time {
    padding-bottom: 8px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .react-datepicker__header--time:not(.react-datepicker__header--time--only) {
    border-top-left-radius: 0;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 0.3rem;
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: inline-block;
    margin: 0 2px;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: ${GlobalColors.s2};
    font-weight: bold;
    font-size: 0.944rem;
  }

  .react-datepicker-time__header {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 2px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }
  .react-datepicker__navigation--previous {
    left: 2px;
  }
  .react-datepicker__navigation--next {
    right: 2px;
  }
  .react-datepicker__navigation--next--with-time:not(
      .react-datepicker__navigation--next--with-today-button
    ) {
    right: 85px;
  }
  .react-datepicker__navigation--years {
    position: relative;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .react-datepicker__navigation--years-previous {
    top: 4px;
  }
  .react-datepicker__navigation--years-upcoming {
    top: -4px;
  }
  .react-datepicker__navigation:hover *::before {
    border-color: #a6a6a6;
  }

  .react-datepicker__navigation-icon {
    position: relative;
    top: -5px;
    font-size: 20px;
    width: 0;
  }
  .react-datepicker__navigation-icon--next {
    left: 1px;
  }
  .react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
    left: -7px;
  }
  .react-datepicker__navigation-icon--previous {
    right: 1px;
  }
  .react-datepicker__navigation-icon--previous::before {
    transform: rotate(225deg);
    right: -7px;
  }

  .react-datepicker__month-container {
    float: left;
  }

  .react-datepicker__year {
    margin: 0.4rem;
    text-align: center;
  }
  .react-datepicker__year-wrapper {
    display: flex;
    flex-wrap: wrap;
    max-width: 180px;
  }
  .react-datepicker__year .react-datepicker__year-text {
    display: inline-block;
    width: 4rem;
    margin: 2px;
  }

  .react-datepicker__month {
    margin: 0.4rem;
    text-align: center;
  }
  .react-datepicker__month .react-datepicker__month-text,
  .react-datepicker__month .react-datepicker__quarter-text {
    display: inline-block;
    width: 4rem;
    margin: 2px;
  }

  .react-datepicker__input-time-container {
    clear: both;
    width: 100%;
    float: left;
    margin: 5px 0 10px 15px;
    text-align: left;
  }
  .react-datepicker__input-time-container .react-datepicker-time__caption {
    display: inline-block;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container {
    display: inline-block;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input {
    display: inline-block;
    margin-left: 10px;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input {
    width: auto;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-inner-spin-button,
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__input
    input[type="time"] {
    -moz-appearance: textfield;
  }
  .react-datepicker__input-time-container
    .react-datepicker-time__input-container
    .react-datepicker-time__delimiter {
    margin-left: 5px;
    display: inline-block;
  }

  .react-datepicker__time-container {
    float: right;
    border-left: 1px solid #aeaeae;
    width: 85px;
  }
  .react-datepicker__time-container--with-today-button {
    display: inline;
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    position: absolute;
    right: -72px;
    top: 0;
  }
  .react-datepicker__time-container .react-datepicker__time {
    position: relative;
    background: white;
    border-bottom-right-radius: 0.3rem;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box {
    width: 85px;
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
    border-bottom-right-radius: 0.3rem;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list {
    list-style: none;
    margin: 0;
    height: calc(195px + (1.7rem / 2));
    overflow-y: scroll;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    box-sizing: content-box;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 30px;
    padding: 5px 10px;
    white-space: nowrap;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item:hover {
    cursor: pointer;

    background-color: ${GlobalColors.s5};
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: #216ba5;
    color: white;
    font-weight: bold;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected:hover {
    background-color: #216ba5;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled {
    color: #ccc;
  }
  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--disabled:hover {
    cursor: default;
    background-color: transparent;
  }

  .react-datepicker__week-number {
    color: #ccc;
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable {
    cursor: pointer;
  }
  .react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
    border-radius: 0.3rem;
    background-color: ${GlobalColors.s5};
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day-names {
    margin-bottom: -8px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    color: ${GlobalColors.s2};
    display: inline-block;
    width: 1.7rem;
    line-height: 1.7rem;
    text-align: center;
    margin: 0.166rem;
    font-family: ${FontFamily.Raleway_900};
    font-weight: 900;
    font-feature-settings: "pnum" on, "lnum" on;
  }

  .react-datepicker__day {
    color: ${GlobalColors.s5};
  }

  .react-datepicker__month--selected,
  .react-datepicker__month--in-selecting-range,
  .react-datepicker__month--in-range,
  .react-datepicker__quarter--selected,
  .react-datepicker__quarter--in-selecting-range,
  .react-datepicker__quarter--in-range {
    border-radius: 0.3rem;
    background-color: #216ba5;
    color: #fff;
  }
  .react-datepicker__month--selected:hover,
  .react-datepicker__month--in-selecting-range:hover,
  .react-datepicker__month--in-range:hover,
  .react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter--in-selecting-range:hover,
  .react-datepicker__quarter--in-range:hover {
    background-color: #1d5d90;
  }
  .react-datepicker__month--disabled,
  .react-datepicker__quarter--disabled {
    color: #ccc;
    pointer-events: none;
  }
  .react-datepicker__month--disabled:hover,
  .react-datepicker__quarter--disabled:hover {
    cursor: default;
    background-color: transparent;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;
  }
  .react-datepicker__day:hover,
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover,
  .react-datepicker__year-text:hover {
    border-radius: 0.3rem;
    background-color: ${GlobalColors.s5};
  }
  .react-datepicker__day--today,
  .react-datepicker__month-text--today,
  .react-datepicker__quarter-text--today,
  .react-datepicker__year-text--today {
    font-weight: bold;
  }
  .react-datepicker__day--highlighted,
  .react-datepicker__month-text--highlighted,
  .react-datepicker__quarter-text--highlighted,
  .react-datepicker__year-text--highlighted {
    border-radius: 0.3rem;
    background-color: #3dcc4a;
    color: #fff;
  }
  .react-datepicker__day--highlighted:hover,
  .react-datepicker__month-text--highlighted:hover,
  .react-datepicker__quarter-text--highlighted:hover,
  .react-datepicker__year-text--highlighted:hover {
    background-color: #32be3f;
  }
  .react-datepicker__day--highlighted-custom-1,
  .react-datepicker__month-text--highlighted-custom-1,
  .react-datepicker__quarter-text--highlighted-custom-1,
  .react-datepicker__year-text--highlighted-custom-1 {
    color: white;
  }
  .react-datepicker__day--highlighted-custom-2,
  .react-datepicker__month-text--highlighted-custom-2,
  .react-datepicker__quarter-text--highlighted-custom-2,
  .react-datepicker__year-text--highlighted-custom-2 {
    color: green;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 0.3rem;
    background-color: ${GlobalColors.s5};
    color: #fff;
  }
  .react-datepicker__day--selected:hover,
  .react-datepicker__day--in-selecting-range:hover,
  .react-datepicker__day--in-range:hover,
  .react-datepicker__month-text--selected:hover,
  .react-datepicker__month-text--in-selecting-range:hover,
  .react-datepicker__month-text--in-range:hover,
  .react-datepicker__quarter-text--selected:hover,
  .react-datepicker__quarter-text--in-selecting-range:hover,
  .react-datepicker__quarter-text--in-range:hover,
  .react-datepicker__year-text--selected:hover,
  .react-datepicker__year-text--in-selecting-range:hover,
  .react-datepicker__year-text--in-range:hover {
    background-color: ${GlobalColors.magenta_s2};
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    border-radius: 0.3rem;
    background-color: ${GlobalColors.s5};
    color: #fff;
  }
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__month-text--keyboard-selected:hover,
  .react-datepicker__quarter-text--keyboard-selected:hover,
  .react-datepicker__year-text--keyboard-selected:hover {
    background-color: ${GlobalColors.magenta_s2};
  }
  .react-datepicker__day--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ),
  .react-datepicker__month-text--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ),
  .react-datepicker__quarter-text--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ),
  .react-datepicker__year-text--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range
    ) {
    background-color: ${GlobalColors.magenta_s2};
  }
  .react-datepicker__month--selecting-range
    .react-datepicker__day--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__month--selecting-range
    .react-datepicker__month-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__month--selecting-range
    .react-datepicker__quarter-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ),
  .react-datepicker__month--selecting-range
    .react-datepicker__year-text--in-range:not(
      .react-datepicker__day--in-selecting-range,
      .react-datepicker__month-text--in-selecting-range,
      .react-datepicker__quarter-text--in-selecting-range,
      .react-datepicker__year-text--in-selecting-range
    ) {
    background-color: ${GlobalColors.s5};
    color: #000;
  }
  .react-datepicker__day--disabled,
  .react-datepicker__month-text--disabled,
  .react-datepicker__quarter-text--disabled,
  .react-datepicker__year-text--disabled {
    cursor: default;
    color: #ccc;
  }
  .react-datepicker__day--disabled:hover,
  .react-datepicker__month-text--disabled:hover,
  .react-datepicker__quarter-text--disabled:hover,
  .react-datepicker__year-text--disabled:hover {
    background-color: transparent;
  }

  .react-datepicker__month-text.react-datepicker__month--selected:hover,
  .react-datepicker__month-text.react-datepicker__month--in-range:hover,
  .react-datepicker__month-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__month-text.react-datepicker__quarter--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__month--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__month--in-range:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--selected:hover,
  .react-datepicker__quarter-text.react-datepicker__quarter--in-range:hover {
    background-color: #216ba5;
  }
  .react-datepicker__month-text:hover,
  .react-datepicker__quarter-text:hover {
    background-color: ${GlobalColors.s5};
  }

  .react-datepicker__input-container {
    position: relative;
    display: inline-block;
    width: 100%;
    background-color: ${GlobalColors.s2};
    border-radius: 5px;

    input {
      min-width: 150px;
      width: fit-content;
      display: block;
      padding-right: 10px;
      color: ${GlobalColors.s4};
      outline: none;
      padding: 5px;
      background-color: transparent;
      border: none;
      font-family: "RobotoRegular", sans-serif;
      font-size: 12px;
    }
  }

  .react-datepicker__year-read-view,
  .react-datepicker__month-read-view,
  .react-datepicker__month-year-read-view {
    border: 1px solid transparent;
    border-radius: 0.3rem;
    position: relative;
  }

  & + * {
    margin-left: 10px;
  }
`;
