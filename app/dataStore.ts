import data from "./data.json";

export function useKids() {
  return data.kids;
}

export function useWorkshops() {
  return data.workshops;
}

export function useSessions() {
  return data.sessions;
}

export function useKid({ kidId }: { kidId: string }) {
  const kids = useKids();
  return kids.find((kid) => kid.id === kidId);
}

export function useWorkshop({ workshopId }: { workshopId: string }) {
  const workshops = useWorkshops();
  return workshops.find((workshop) => workshop.id === workshopId);
}

export function useAvailableWorkshopsForKid({ kidId }: { kidId: string }) {
  const workshops = useWorkshops();
  const kidSessions = useSuccessfullSessionsForKid({ kidId });
  const kidWorkshopIds = kidSessions.map((session) => session.workshopId);
  return workshops.filter((workshop) => !kidWorkshopIds.includes(workshop.id));
}

export function useSessionsForKid({ kidId }: { kidId: string }) {
  const sessions = useSessions();
  return sessions.filter((session) => session.kidId === kidId);
}

export function useSuccessfullSessionsForKid({ kidId }: { kidId: string }) {
  const sessions = useSessionsForKid({ kidId });
  return sessions.filter((session) => session.succededAt);
}
