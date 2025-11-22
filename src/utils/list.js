const STORAGE_KEY = "participants_list";

export function getParticipants() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function addParticipant(participant) {
    const participants = getParticipants();
    participants.push(participant);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
}

export function removeParticipant(idx) {
    const participants = getParticipants();
    participants.splice(idx, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
}

export function updateParticipant(idx, participant) {
    const participants = getParticipants();
    participants[idx] = participant;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
}