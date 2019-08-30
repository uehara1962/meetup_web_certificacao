export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}

export function deleteMeetupRequest(data) {
  return {
    type: '@meetup/DELETE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function deleteMeetupSuccess(meetup) {
  return {
    type: '@meetup/DELETE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function deleteMeetupFailure() {
  return {
    type: '@meetup/DELETE_MEETUP_FAILURE',
  };
}
