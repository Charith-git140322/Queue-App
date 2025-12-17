"use client";

import React from "react";
import { AccessTime, Person, DirectionsWalk } from "@mui/icons-material";

export default function TrackingPage({ params }: { params: { id: 1 } }) {
    // Mock Data Logic
    const myNumber = 45;
    const nowServing = 40;
    const avgServiceTime = 5; // minutes
    const peopleAhead = Math.max(0, myNumber - nowServing - 1); // logic: if I am 45 and 40 is serving, 41, 42, 43, 44 are waiting? Or just difference. User asked: "People ahead of you: 4" for 45 vs 40. 45-40 = 5. Maybe 4 people waiting (41, 42, 43, 44). Let's stick to 4.
    // Formula: People_Ahead * Average_Service_Time
    const estimatedWaitTime = peopleAhead * avgServiceTime;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

            <main className="w-full max-w-md relative z-10 flex flex-col gap-6">
                {/* Header */}
                <header className="flex flex-col items-center text-center space-y-2 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/25 mb-2">
                        <DirectionsWalk className="text-white text-2xl" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Queue Status
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Ticket ID: <span className="font-mono text-purple-400">#{params.id || "Unknown"}</span>
                    </p>
                </header>

                {/* Main Status Card */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                    <div className="relative bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl">
                        <span className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-2">Your Number</span>
                        <div className="text-7xl font-black text-white tracking-tighter mb-2 tabular-nums">
                            #{myNumber}
                        </div>
                        <div className="px-3 py-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
                            <p className="text-xs font-medium text-purple-300 flex items-center gap-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                                </span>
                                Live Updates
                            </p>
                        </div>
                    </div>
                </div>

                {/* Current Serving Status */}
                <div className="bg-[#161616] border border-white/5 rounded-2xl p-6 flex items-center justify-between shadow-lg">
                    <div className="flex flex-col">
                        <span className="text-sm text-neutral-400">Now Serving</span>
                        <span className="text-2xl font-bold text-white tabular-nums">#{nowServing}</span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#161616] border border-white/5 rounded-2xl p-5 flex flex-col gap-3 hover:bg-[#1a1a1a] transition-colors">
                        <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <Person fontSize="small" />
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white tabular-nums">{peopleAhead}</span>
                            <span className="text-xs text-neutral-500 font-medium">People Ahead</span>
                        </div>
                    </div>

                    <div className="bg-[#161616] border border-white/5 rounded-2xl p-5 flex flex-col gap-3 hover:bg-[#1a1a1a] transition-colors">
                        <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                            <AccessTime fontSize="small" />
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white tabular-nums">{estimatedWaitTime}<span className="text-base font-normal text-neutral-500 ml-1">min</span></span>
                            <span className="text-xs text-neutral-500 font-medium">Est. Wait Time</span>
                        </div>
                    </div>
                </div>

            </main>

            {/* Footer */}
            <footer className="absolute bottom-6 text-center w-full">
                <p className="text-xs text-neutral-600">
                    Powered by QueueMaster
                </p>
            </footer>
        </div>
    );
}
