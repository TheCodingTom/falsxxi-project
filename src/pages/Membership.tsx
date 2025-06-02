import { useForm } from "react-hook-form";
import "../styles/Membership.css";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

function Membership() {
  const formSchema = z.object({
    fullName: z.string().min(5).max(50),
    email: z.string().email(),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const addMemberData = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "memberships"), {
      fullName: "Paolo Di Canio",
      email: "paolinodicanio@test.com",
    });
    console.log("Document added with ID: ", docRef.id);
  };

  return (
    <div className="main-container">
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 form"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome e cognome</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button onClick={addMemberData} type="submit">
                Richiedi tessera
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="main-text">
        <h3>
          Puoi diventare socio falsxxi e supportare il progetto in prima linea.
          Essere dei nostri non è solo una questione di cuore (anche), ma un
          modo concreto per far crescere la scena che ci anima. Con la tessera
          annuale potrai:
          <ul>
            <li>- accedere a eventi riservati solo ai soci</li>
            <li>
              - partecipare al consiglio di amministrazione di fine anno
              (spoiler: è più divertente di quello della RAI)
            </li>
            <li>
              - ricevere la maglietta ufficiale di @falsxxi, perché anche
              l’occhio vuole il suo groove
            </li>
          </ul>{" "}
          La tessera ha durata annuale, valida per tutto l’anno solare. Che
          aspetti? Vieni a muovere cose con noi.
        </h3>
      </div>
    </div>
  );
}

export default Membership;
