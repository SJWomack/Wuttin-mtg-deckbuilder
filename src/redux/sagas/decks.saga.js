import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFormatDecks (action) {
   try{  
   const formatDecks = yield axios.get(`/api/deck/format/${action.payload}`)
   console.log(formatDecks.data)
    yield put ({
        type: 'SET_FORMAT_DECKS',
        payload: formatDecks.data
    })
   } 
   catch (err) {
    console.error('can not get format decks', err);
   }
}

function* newDeck (action) {
    try{
        const newDeck = yield axios.post('/api/deck/new', action.payload)
        alert('Deck Created!');
    }
    catch (err){
        console.error('deck creation failed', err);
        alert('Deck Creation failed, please try again');
        return;
    }
}

function* decksSaga(){
    yield takeLatest ('FETCH_FORMAT_DECKS', fetchFormatDecks);
    yield takeLatest ('CREATE_DECK', newDeck);
}

export default decksSaga;