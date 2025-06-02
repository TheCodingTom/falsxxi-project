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
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";

function Membership() {
  const formSchema = z.object({
    fullName: z.string().min(5).max(50),
    email: z.string().email(),
    // dateOfBirth: z.date(),
    fiscalCode: z.string(),
  });

  // 1. Define your form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      // dateOfBirth: new Date(),
      fiscalCode: "",
    },
  });

  // 2. Define a submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const docRef = await addDoc(collection(db, "memberships"), values);
      console.log("Document added with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document", err);
    }
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
                    <Input placeholder="Guglielmo Baffo" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="guglielmo.baffo@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data di nascita</FormLabel>
                  <FormControl>
                    <Input placeholder="01.01.1990" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="fiscalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Codice Fiscale</FormLabel>
                  <FormControl>
                    <Input placeholder="FDVHQB96E57C577H" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button type="submit">Richiedi tessera</Button>
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
