import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP = "584126395973";
const EMAIL = "indesasoft@gmail.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.msg}\n\n— ${form.name}`);
    const subject = encodeURIComponent(`Consulta de ${form.name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="bg-secondary/30 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Contacto</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-5xl">
            Estamos a un mensaje.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Responde tus dudas, recomendaciones de rutina y pedidos personalizados. Atención de lunes a sábado.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary"
            >
              <div className="grid size-12 place-items-center rounded-full bg-primary/15 text-primary">
                <MessageCircle className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <p className="font-medium">+58 412 639 5973</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary"
            >
              <div className="grid size-12 place-items-center rounded-full bg-primary/15 text-primary">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="font-medium">{EMAIL}</p>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          <h3 className="font-display text-2xl font-semibold">Escríbenos</h3>
          <p className="mt-1 text-sm text-muted-foreground">Te responderemos en menos de 24 horas.</p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Nombre</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 h-11 w-full rounded-xl border border-input bg-background px-4 outline-none focus:border-ring"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 h-11 w-full rounded-xl border border-input bg-background px-4 outline-none focus:border-ring"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Mensaje</label>
              <textarea
                required
                rows={4}
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 outline-none focus:border-ring"
              />
            </div>
            <Button type="submit" className="w-full rounded-full" size="lg">
              <Send className="mr-2 size-4" /> Enviar mensaje
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}