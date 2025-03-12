# SIP Calculator Web App

A simple and interactive SIP (Systematic Investment Plan) Calculator that allows users to input their monthly SIP amounts, lump sum investments, expected returns (CAGR), and more. The application provides calculated results along with charts (Line and Pie charts) to visualize the investment growth over time and the breakdown between total investment and future value.

## Features

- **Input Form**: Allows the user to input values for monthly SIP, lump sum amount, time period, expected CAGR (Compound Annual Growth Rate), annual step-up percentage, and inflation rate.
- **Calculate SIP**: A button to calculate the SIP value based on the entered data.
- **Results Display**: After clicking "Calculate SIP Value," the results for future value, total invested amount, and capital gains are displayed.
- **Charts**:
  - **Line Chart**: Displays the growth of investment over time.
  - **Pie Chart**: Shows the breakdown of the total invested amount and future value of the investment.

## Technologies Used

- **React**: The frontend framework for building the user interface.
- **Chart.js**: A JavaScript library for displaying interactive charts (Line and Pie charts).
- **Tailwind CSS**: Utility-first CSS framework for styling the web app.
- **React State Management**: To manage user input, results, and charts dynamically.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/diwashd/sip-calculator-webapp.git
   ```

## How to Use

Follow these steps to use the SIP Calculator Web App:

1. **Enter the Details in the Input Form**:

   - **Monthly SIP Amount (₹)**: Enter the amount you plan to invest monthly in the SIP.
   - **Lump Sum Amount (₹)**: If you are making any lump sum investment at the start, enter the amount here.
   - **Time Period (Years)**: Specify the duration for which you plan to invest (in years).
   - **Expected CAGR (%)**: Provide the expected Compound Annual Growth Rate (CAGR) in percentage. This is the expected rate of return on your investment annually.
   - **Annual Step-Up Percentage (%)**: If you plan to increase your SIP amount annually by a certain percentage, enter that percentage here.
   - **Inflation Rate (%)**: Enter the expected annual inflation rate. This is an optional field for the user but can help make the SIP calculation more realistic.

2. **Click on the "Calculate SIP Value" Button**:

   - Once you’ve filled in all the fields, click the **"Calculate SIP Value"** button to calculate the results based on the provided information.

3. **View the Results**:
   After clicking the button, the following results will be displayed:

   - **Future Value**: The value your investment will grow to after the specified time period, considering the expected CAGR and other factors.
   - **Total Invested**: The total amount you have invested, including the lump sum and monthly SIP contributions.
   - **Capital Gains**: The difference between the future value and the total amount invested, representing the profit earned from the investment.

4. **Charts**:
   - **Line Chart**: Shows the growth of your investment over time, displaying how the future value evolves each year.
   - **Pie Chart**: Shows the breakdown of your total invested amount and future value, helping you visualize the proportion of your investment that grows over time.

That's it! Now you can easily track and visualize how your SIP investments grow over time with the help of the SIP Calculator Web App.
