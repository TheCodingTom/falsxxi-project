import { useForm } from "react-hook-form";
import "../styles/Membership.css";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";

// Schema expects dateOfBirth as a string in "yyyy-MM-dd" format
const formSchema = z.object({
  fullName: z
    .string()
    .min(5, "Questo campo deve contenere almeno 5 caratteri")
    .max(50, "Questo campo non può superare i 50 caratteri"),
  email: z.string().email("Inserisci un indirizzo email valido"),
  dateOfBirth: z
    .string()
    .nonempty("La data è obbligatoria")
    .refine((dateStr) => {
      const birthDate = new Date(dateStr);
      if (isNaN(birthDate.getTime())) return false;
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    }, "Devi avere almeno 18 anni"),
  fiscalCode: z
    .string()
    .regex(
      /^[A-Z0-9]{16}$/,
      "Il codice fiscale deve avere 16 caratteri alfanumerici"
    ),
});

type MembershipFormValues = z.infer<typeof formSchema>;

function Membership() {
  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      dateOfBirth: new Date().toISOString().split("T")[0], // formatted "yyyy-MM-dd"
      fiscalCode: "",
    },
  });

  const onSubmit = async (values: MembershipFormValues) => {
    try {
      // Convert dateOfBirth string to Date before saving if needed
      const dataToSave = {
        ...values,
        dateOfBirth: new Date(values.dateOfBirth),
      };
      const docRef = await addDoc(collection(db, "memberships"), dataToSave);
      console.log("Document added with ID: ", docRef.id);
      toast.success("Richiesta effettuata con successo!", {
        position: "top-right",
        autoClose: 3000,
      });
      form.reset();
    } catch (err) {
      console.error("Error adding document", err);
      toast.error("La richiesta non è andata a buon fine. Riprova!", {
        position: "top-right",
        autoClose: 3000,
      });
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

            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data di nascita</FormLabel>
                  <FormControl>
                    {/* Now field.value is a string "yyyy-MM-dd" */}
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <div className="flex flex-row justify-center">
              <Button type="submit">Richiedi tessera</Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="main-text">
        <h2>Perché richiedere la tessera?</h2>
        <p>
          Puoi diventare socio falsxxi e supportare il progetto in prima linea.
          Essere dei nostri non è solo una questione di cuore (anche), ma un
          modo concreto per far crescere la scena che ci anima. Con la tessera
          annuale potrai:
        </p>
        <ul>
          <li>- accedere a eventi riservati solo ai soci</li>
          <li>
            - partecipare al consiglio di amministrazione di fine anno (spoiler:
            è più divertente di quello della RAI)
          </li>
          <li>
            - ricevere la maglietta ufficiale di @falsxxi, perché anche l’occhio
            vuole il suo groove
          </li>
        </ul>
        <p>
          La tessera ha durata annuale, valida per tutto l’anno solare. Che
          aspetti? Vieni a muovere cose con noi.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Membership;
