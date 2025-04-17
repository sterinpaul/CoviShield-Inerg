import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CovidData } from '../types/index';

interface CovidState {
  data: CovidData[];
  currentData: CovidData[];
  selectedState: string;
  loading: boolean;
}

// Initial state of redux
const initialState: CovidState = {
  data: [],
  currentData:[],
  selectedState: 'All States',
  loading: true
};

// Redux slice
const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    setCovidData: (state, action: PayloadAction<CovidData[]>) => {
      state.data = action.payload;
    },
    setCurrentCovidData: (state, action: PayloadAction<CovidData[]>) => {
      state.currentData = action.payload;
    },
    setSelectedState: (state, action: PayloadAction<string>) => {
      state.selectedState = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setCovidData, setCurrentCovidData, setSelectedState, setLoadingState } = covidSlice.actions;
export default covidSlice.reducer;