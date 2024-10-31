import { Test, TestingModule } from '@nestjs/testing';
import { AlumnoService } from './alumno.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Sexo } from 'src/sexo/entities/sexo.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Encargado } from 'src/encargado/entities/encargado.entity';
import { Enfermedad } from 'src/enfermedad/entities/enfermedad.entity';
import { Turno } from 'src/turno/entities/turno.entity';
import { Padrino } from 'src/padrino/entities/padrino.entity';
import { User } from 'src/users/entities/user.entity';
import { Alumno } from './entities/alumno.entity';

describe('AlumnoService', () => {
  let service: AlumnoService;
  let alumnoRepository: Repository<Alumno>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlumnoService,
        { provide: getRepositoryToken(Alumno), useClass: Repository },
        { provide: getRepositoryToken(Sexo), useClass: Repository },
        { provide: getRepositoryToken(Role), useClass: Repository },
        { provide: getRepositoryToken(Encargado), useClass: Repository },
        { provide: getRepositoryToken(Enfermedad), useClass: Repository },
        { provide: getRepositoryToken(Turno), useClass: Repository },
        { provide: getRepositoryToken(Padrino), useClass: Repository },
        { provide: getRepositoryToken(User), useClass: Repository },
      ],
    }).compile();

    service = module.get<AlumnoService>(AlumnoService);
    alumnoRepository = module.get<Repository<Alumno>>(getRepositoryToken(Alumno));
  });

  it('should create a new alumno', async () => {
    // Preparar datos para la prueba
    const createAlumnoDto = {
      name: 'Juan',
      lastName: 'Pérez',
      registrationDate: new Date(),
      documentNumber: 123456789,
      esBecado: true,
      sexoId: 1,
      roleId: 1,
      encargadoId: 1,
      enfermedadId: 1,
      turnoId: 1,
      administradorId: 1,
      padrinoId: 1,
    };

    // Mocks de los repositorios para las relaciones (sexo, role, etc.)
    jest.spyOn(alumnoRepository, 'save').mockResolvedValueOnce(createAlumnoDto as unknown as Alumno);

    // Ejecución del método
    const result = await service.create(createAlumnoDto);

    // Verificaciones
    expect(result).toEqual({
      ok: true,
      message: 'Alumno creado con exito',
      status: 201,
    });
  });
});
