"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  CreditCard,
  ShieldCheck,
  Zap,
  Workflow,
  Mail,
  Calendar,
  FileText,
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  Settings,
  Bot,
  TrendingUp,
} from "lucide-react";

function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-md active:scale-[.98] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-gray-200/60 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

const AGENTS = [
  {
    id: "inbox-triage",
    name: "Inbox Triage Pro",
    icon: Mail,
    tagline: "Auto-label, summarize, and draft replies for approval.",
    price: 29,
    roi: "Saves ~4 hrs/week",
    features: [
      "Summarizes long threads",
      "Suggests replies under 120 words",
      "One-click approve & send",
      "Learns tone from examples",
    ],
  },
  {
    id: "meet-notes",
    name: "Meet Notes + CRM Logger",
    icon: Calendar,
    tagline: "Turns meetings into clean notes and logs CRM updates.",
    price: 39,
    roi: "Saves ~3 hrs/week",
    features: [
      "Speaker-tagged summaries",
      "Action items with owners",
      "Auto-logs to HubSpot/Salesforce",
      "Follow-up email drafts",
    ],
  },
];
export default function AgentsMarketplace() {
  const [q, setQ] = useState("");
  const [cart, setCart] = useState<string[]>([]);

  const visible = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return AGENTS;
    return AGENTS.filter(
      (a) =>
        a.name.toLowerCase().includes(t) || a.tagline.toLowerCase().includes(t)
    );
  }, [q]);

  const add = (id: string) => !cart.includes(id) && setCart((c) => [...c, id]);
  const remove = (id: string) => setCart((c) => c.filter((x) => x !== id));
  const checkout = () =>
    alert(`Demo: would open Stripe with items: ${cart.join(", ")}`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-900 text-white">
              <Bot size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              AgentCart
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#agents" className="hover:opacity-80">
              Agents
            </a>
            <a href="#how" className="hover:opacity-80">
              How it works
            </a>
            <a href="#pricing" className="hover:opacity-80">
              Pricing
            </a>
            <a href="#trust" className="hover:opacity-80">
              Trust
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="bg-gray-900 text-white">Sign in</Button>
            <Button className="bg-white border border-gray-300">
              Book demo
            </Button>
          </div>
        </div>
      </header>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-medium">
              <Zap size={14} /> Launch in minutes
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Buy ready-to-work{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                AI agents
              </span>{" "}
              for the boring stuff.
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Inbox triage, meeting notes, invoice filing, lead enrichment and
              more. Approve in one click or switch to autopilot.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-gray-900 text-white inline-flex gap-2">
                Browse agents <ArrowRight size={16} />
              </Button>
              <Button className="bg-white border border-gray-300 inline-flex gap-2">
                See pricing
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} /> SOC2-style practices
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={16} /> Stripe checkout
              </div>
              <div className="flex items-center gap-2">
                <Workflow size={16} /> Audit logs & approvals
              </div>
            </div>
          </div>

          {/* Hero card */}
          <div>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                <Search size={16} /> Quick search agents
              </div>
              <div className="flex items-center gap-2 rounded-xl border px-3 py-2">
                <Search size={16} className="opacity-60" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Try 'invoice' or 'CRM'"
                  className="w-full py-2 outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {visible.slice(0, 4).map((a) => (
                  <Card key={a.id} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                        <a.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{a.name}</h3>
                          <span className="text-sm font-semibold">
                            ${a.price}/mo
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {a.tagline}
                        </p>
                        <ul className="mt-3 space-y-1 text-sm text-gray-700">
                          {a.features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 size={14} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 flex items-center gap-2">
                          {cart.includes(a.id) ? (
                            <Button
                              onClick={() => remove(a.id)}
                              className="bg-white border border-gray-300"
                            >
                              Remove
                            </Button>
                          ) : (
                            <Button
                              onClick={() => add(a.id)}
                              className="bg-gray-900 text-white inline-flex gap-2"
                            >
                              <ShoppingCart size={16} /> Add to cart
                            </Button>
                          )}
                          <span className="text-xs text-gray-600">{a.roi}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  {cart.length} item(s) in cart
                </div>
                <Button
                  onClick={checkout}
                  className="bg-gray-900 text-white inline-flex gap-2"
                >
                  <CreditCard size={16} /> Checkout
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Agents grid */}
      <section id="agents" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold tracking-tight">Featured agents</h2>
        <p className="text-gray-600 mt-1">
          Plug-and-play automations with human-in-the-loop by default.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {AGENTS.map((a) => (
            <Card key={a.id} className="p-5">
              <div className="flex items-start gap-3">
                <div className="h-11 w-11 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                  <a.icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{a.name}</h3>
                    <span className="text-sm font-semibold">${a.price}/mo</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{a.tagline}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {a.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={14} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between">
                {cart.includes(a.id) ? (
                  <Button
                    onClick={() => remove(a.id)}
                    className="bg-white border border-gray-300"
                  >
                    Remove
                  </Button>
                ) : (
                  <Button
                    onClick={() => add(a.id)}
                    className="bg-gray-900 text-white inline-flex gap-2"
                  >
                    <ShoppingCart size={16} /> Add to cart
                  </Button>
                )}
                <span className="text-xs text-gray-600">{a.roi}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>{" "}
      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold tracking-tight">
          How purchasing works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="p-5">
            <h3 className="font-semibold mb-1">1) Choose agent(s)</h3>
            <p className="text-sm text-gray-600">
              Browse the catalog, add to cart, and pick a monthly plan.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="font-semibold mb-1">2) Connect tools</h3>
            <p className="text-sm text-gray-600">
              OAuth to Gmail, Slack, CRM, Drive. Least-privilege scopes.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="font-semibold mb-1">3) Approve & run</h3>
            <p className="text-sm text-gray-600">
              Start with human approvals, then switch agents to autopilot.
            </p>
          </Card>
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold tracking-tight">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Starter</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-900 text-white px-3 py-1 text-xs font-medium">
                Most popular
              </span>
            </div>
            <div className="mt-2 text-3xl font-extrabold">
              $29
              <span className="text-base font-medium text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> 1 agent included
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Human-in-the-loop approvals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Email + Slack integration
              </li>
            </ul>
            <Button className="mt-5 w-full bg-gray-900 text-white">
              Get Starter
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Team</h3>
            <div className="mt-2 text-3xl font-extrabold">
              $79
              <span className="text-base font-medium text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Any 3 agents
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Shared workspace & roles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> HubSpot / Notion / Drive
              </li>
            </ul>
            <Button className="mt-5 w-full bg-gray-900 text-white">
              Get Team
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold">Scale</h3>
            <div className="mt-2 text-3xl font-extrabold">
              $199
              <span className="text-base font-medium text-gray-500">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Unlimited agents
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> SLA + audit logs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> SAML SSO & custom limits
              </li>
            </ul>
            <Button className="mt-5 w-full bg-gray-900 text-white">
              Get Scale
            </Button>
          </Card>
        </div>
      </section>
      {/* Trust */}
      <section id="trust" className="mx-auto max-w-7xl px-4 py-10">
        <Card className="p-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold">Built for trust</h3>
              <p className="text-sm text-gray-600 mt-2">
                Audit logs, versioned prompts, reversible actions, and data
                retention controls. Your data stays in your workspace.
              </p>
            </div>
            <ul className="md:col-span-2 grid md:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <ShieldCheck size={16} /> Least-privilege OAuth scopes
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Settings size={16} /> Per-agent approvals & guardrails
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Workflow size={16} /> Structured workflows with retries
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <FileText size={16} /> Full run & action history
              </li>
            </ul>
          </div>
        </Card>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
                <Bot size={16} />
              </div>
              <span className="font-semibold">AgentCart</span>
            </div>
            <p className="text-gray-600">
              AI agents for the work no one wants to do.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a href="#agents" className="hover:underline">
                  Agents
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#how" className="hover:underline">
                  How it works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-600">
              <li>
                <a className="hover:underline">About</a>
              </li>
              <li>
                <a className="hover:underline">Security</a>
              </li>
              <li>
                <a className="hover:underline">Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get started</h4>
            <p className="text-gray-600">
              Export to GitHub → deploy on Vercel.
            </p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-8">
          © {new Date().getFullYear()} AgentCart
        </div>
      </footer>
    </div>
  );
}
