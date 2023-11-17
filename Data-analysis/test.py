# Import necessary libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import xgboost as xgb

# Load the data
train_data = pd.Series(['34,826', '38,940', '37,131', '43,559', '44,325', '42,657', '43,600', '44,599', '44,165'], dtype='object')
y_data = pd.Series([2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011], name='Year')

# Preprocess the data
train_data = train_data.str.replace(',', '').astype(float)

# Combine features and labels into a single DataFrame
df = pd.DataFrame({'X': train_data, 'Year': y_data})

print(df)
# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(df[['Year']], df['X'], test_size=0.2, random_state=42)

# Create an XGBoost regression model
model = xgb.XGBRegressor(objective ='reg:squarederror')
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')

# Now you can use the model to predict X for a particular year
year_to_predict = 2022  # Replace with the year you want to predict
X_to_predict = np.array([[year_to_predict]])
predicted_X = model.predict(X_to_predict)
print(f'Predicted X for {year_to_predict}: {predicted_X[0]}')
