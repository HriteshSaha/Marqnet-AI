import { IsBoolean, IsOptional } from 'class-validator';

export class RevokeAllSessionsDto {
  /** Default true: "log out everywhere else" without invalidating the request you're making right now. */
  @IsOptional()
  @IsBoolean()
  keepCurrent?: boolean;
}
