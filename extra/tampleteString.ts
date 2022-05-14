export interface Event {
  type: `${string}Event`;
  read: () => void;
}
export interface Listener {
  type: `${string}Listener`;
  listen: () => void;
}

export function handler(item: Event | Listener) {
  if (item.type === "PushEvent") {
    item.read();
  }
}

handler({ type: "xListener", listen: () => {} });
