import { turso } from "./turso";

export interface SpeakerAffiliation {
  company_name: string;
  company_website: string;
  company_description: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  profilePicUrl: string;
  personalWebsite: string;
  affiliations: SpeakerAffiliation[];
}

export async function initSpeakersTable() {
  await turso.execute(`
    CREATE TABLE IF NOT EXISTS speakers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      bio TEXT NOT NULL DEFAULT '',
      profilePicUrl TEXT NOT NULL DEFAULT '',
      personalWebsite TEXT NOT NULL DEFAULT '',
      affiliations TEXT NOT NULL DEFAULT '[]'
    )
  `);
}

export async function addSpeaker(speaker: Omit<Speaker, "id">): Promise<Speaker> {
  await initSpeakersTable();

  const id = crypto.randomUUID();
  await turso.execute({
    sql: `INSERT INTO speakers (id, name, bio, profilePicUrl, personalWebsite, affiliations) VALUES (?, ?, ?, ?, ?, ?)`,
    args: [
      id,
      speaker.name,
      speaker.bio,
      speaker.profilePicUrl,
      speaker.personalWebsite,
      JSON.stringify(speaker.affiliations),
    ],
  });

  return { id, ...speaker };
}

export async function deleteSpeaker(id: string): Promise<void> {
  await turso.execute({ sql: "DELETE FROM speakers WHERE id = ?", args: [id] });
}

export async function getSpeakers(): Promise<Speaker[]> {
  await initSpeakersTable();

  const result = await turso.execute("SELECT * FROM speakers ORDER BY name");

  return result.rows.map((row) => ({
    id: row.id as string,
    name: row.name as string,
    bio: row.bio as string,
    profilePicUrl: row.profilePicUrl as string,
    personalWebsite: row.personalWebsite as string,
    affiliations: JSON.parse((row.affiliations as string) || "[]") as SpeakerAffiliation[],
  }));
}
