"use client";

import { useEffect, useRef } from "react";

export function useWebSocket(url: string, onMessage: (data: any) => void) {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onmessage = (event) => {
      onMessage(JSON.parse(event.data));
    };

    return () => socketRef.current?.close();
  }, [url, onMessage]);
}
