import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './estados/estados.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { LocalidadesModule } from './localidades/localidades.module';

@Module({
  imports: [EstadosModule, MunicipiosModule, LocalidadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
