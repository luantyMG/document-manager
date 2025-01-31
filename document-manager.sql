PGDMP                      |            document-manager    17.0    17.0 L    \           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            ]           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            ^           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            _           1262    24580    document-manager    DATABASE     �   CREATE DATABASE "document-manager" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
 "   DROP DATABASE "document-manager";
                     postgres    false            f           1247    24697    estado_nuevo_type    TYPE     �   CREATE TYPE public.estado_nuevo_type AS ENUM (
    'Pendiente',
    'En Proceso',
    'En Revisión',
    'Finalizada',
    'Vencida'
);
 $   DROP TYPE public.estado_nuevo_type;
       public               postgres    false            �           1247    24880    estatus_enum    TYPE     p   CREATE TYPE public.estatus_enum AS ENUM (
    'Pendiente',
    'Revisado',
    'En proceso',
    'Concluido'
);
    DROP TYPE public.estatus_enum;
       public               postgres    false            `           1247    24642    estatus_type    TYPE     �   CREATE TYPE public.estatus_type AS ENUM (
    'Pendiente',
    'En Proceso',
    'En Revisión',
    'Finalizada',
    'Vencida'
);
    DROP TYPE public.estatus_type;
       public               postgres    false            c           1247    24668    estatus_usuario_type    TYPE     x   CREATE TYPE public.estatus_usuario_type AS ENUM (
    'Pendiente',
    'En Proceso',
    'Finalizada',
    'Vencida'
);
 '   DROP TYPE public.estatus_usuario_type;
       public               postgres    false            �           1247    24873    prioridad_enum    TYPE     \   CREATE TYPE public.prioridad_enum AS ENUM (
    'Urgente',
    'Normal',
    'Destacado'
);
 !   DROP TYPE public.prioridad_enum;
       public               postgres    false            ]           1247    24635    prioridad_type    TYPE     \   CREATE TYPE public.prioridad_type AS ENUM (
    'Normal',
    'Destacada',
    'Urgente'
);
 !   DROP TYPE public.prioridad_type;
       public               postgres    false            �            1259    24817    asignacionestareas    TABLE     G  CREATE TABLE public.asignacionestareas (
    asignacion_id integer NOT NULL,
    tarea_id integer NOT NULL,
    usuario_id integer NOT NULL,
    estatus_usuario character varying(20) DEFAULT 'Pendiente'::character varying,
    comentarios_usuario text,
    fecha_asignacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT asignacionestareas_estatus_usuario_check CHECK (((estatus_usuario)::text = ANY ((ARRAY['Pendiente'::character varying, 'En Proceso'::character varying, 'Finalizada'::character varying, 'Vencida'::character varying])::text[])))
);
 &   DROP TABLE public.asignacionestareas;
       public         heap r       postgres    false            �            1259    24816 $   asignacionestareas_asignacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.asignacionestareas_asignacion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.asignacionestareas_asignacion_id_seq;
       public               postgres    false    228            `           0    0 $   asignacionestareas_asignacion_id_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.asignacionestareas_asignacion_id_seq OWNED BY public.asignacionestareas.asignacion_id;
          public               postgres    false    227            �            1259    24860    coordinaciones    TABLE     �   CREATE TABLE public.coordinaciones (
    coordinacion_id integer NOT NULL,
    nombre_coordinacion character varying(255) NOT NULL,
    direccion_id integer
);
 "   DROP TABLE public.coordinaciones;
       public         heap r       postgres    false            �            1259    24859 "   coordinaciones_coordinacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.coordinaciones_coordinacion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.coordinaciones_coordinacion_id_seq;
       public               postgres    false    232            a           0    0 "   coordinaciones_coordinacion_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.coordinaciones_coordinacion_id_seq OWNED BY public.coordinaciones.coordinacion_id;
          public               postgres    false    231            �            1259    24769    departamentos    TABLE     �   CREATE TABLE public.departamentos (
    departamento_id integer NOT NULL,
    nombre_departamento character varying(255) NOT NULL,
    plantel_id integer
);
 !   DROP TABLE public.departamentos;
       public         heap r       postgres    false            �            1259    24768 !   departamentos_departamento_id_seq    SEQUENCE     �   CREATE SEQUENCE public.departamentos_departamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.departamentos_departamento_id_seq;
       public               postgres    false    222            b           0    0 !   departamentos_departamento_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.departamentos_departamento_id_seq OWNED BY public.departamentos.departamento_id;
          public               postgres    false    221            �            1259    24750    direccionesgenerales    TABLE     �   CREATE TABLE public.direccionesgenerales (
    direccion_id integer NOT NULL,
    nombre_direccion character varying(255) NOT NULL
);
 (   DROP TABLE public.direccionesgenerales;
       public         heap r       postgres    false            �            1259    24749 %   direccionesgenerales_direccion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.direccionesgenerales_direccion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public.direccionesgenerales_direccion_id_seq;
       public               postgres    false    218            c           0    0 %   direccionesgenerales_direccion_id_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public.direccionesgenerales_direccion_id_seq OWNED BY public.direccionesgenerales.direccion_id;
          public               postgres    false    217            �            1259    24839    notificaciones    TABLE       CREATE TABLE public.notificaciones (
    notificacion_id integer NOT NULL,
    tarea_id integer NOT NULL,
    usuario_id integer NOT NULL,
    mensaje text,
    fecha_notificacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    leida boolean DEFAULT false
);
 "   DROP TABLE public.notificaciones;
       public         heap r       postgres    false            �            1259    24838 "   notificaciones_notificacion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notificaciones_notificacion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.notificaciones_notificacion_id_seq;
       public               postgres    false    230            d           0    0 "   notificaciones_notificacion_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.notificaciones_notificacion_id_seq OWNED BY public.notificaciones.notificacion_id;
          public               postgres    false    229            �            1259    24757 	   planteles    TABLE     �   CREATE TABLE public.planteles (
    plantel_id integer NOT NULL,
    nombre_plantel character varying(255) NOT NULL,
    direccion_id integer
);
    DROP TABLE public.planteles;
       public         heap r       postgres    false            �            1259    24756    planteles_plantel_id_seq    SEQUENCE     �   CREATE SEQUENCE public.planteles_plantel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.planteles_plantel_id_seq;
       public               postgres    false    220            e           0    0    planteles_plantel_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.planteles_plantel_id_seq OWNED BY public.planteles.plantel_id;
          public               postgres    false    219            �            1259    24798    tareas    TABLE     T  CREATE TABLE public.tareas (
    tarea_id integer NOT NULL,
    creador_id integer NOT NULL,
    asunto character varying(200) NOT NULL,
    descripcion text,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    fecha_entrega timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    prioridad character varying(10) DEFAULT 'Normal'::character varying,
    estatus character varying(20) DEFAULT 'Pendiente'::character varying,
    CONSTRAINT tareas_estatus_check CHECK (((estatus)::text = ANY ((ARRAY['Pendiente'::character varying, 'En Proceso'::character varying, 'Finalizada'::character varying, 'Vencida'::character varying])::text[]))),
    CONSTRAINT tareas_prioridad_check CHECK (((prioridad)::text = ANY ((ARRAY['Normal'::character varying, 'Destacada'::character varying, 'Urgente'::character varying])::text[])))
);
    DROP TABLE public.tareas;
       public         heap r       postgres    false            �            1259    24797    tareas_tarea_id_seq    SEQUENCE     �   CREATE SEQUENCE public.tareas_tarea_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.tareas_tarea_id_seq;
       public               postgres    false    226            f           0    0    tareas_tarea_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.tareas_tarea_id_seq OWNED BY public.tareas.tarea_id;
          public               postgres    false    225            �            1259    24781    usuarios    TABLE       CREATE TABLE public.usuarios (
    usuario_id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    correo character varying(100) NOT NULL,
    rol character varying(50) NOT NULL,
    plantel_id integer,
    departamento_id integer,
    coordinacion_id integer
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false            �            1259    24780    usuarios_usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_usuario_id_seq;
       public               postgres    false    224            g           0    0    usuarios_usuario_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_usuario_id_seq OWNED BY public.usuarios.usuario_id;
          public               postgres    false    223            �           2604    24820     asignacionestareas asignacion_id    DEFAULT     �   ALTER TABLE ONLY public.asignacionestareas ALTER COLUMN asignacion_id SET DEFAULT nextval('public.asignacionestareas_asignacion_id_seq'::regclass);
 O   ALTER TABLE public.asignacionestareas ALTER COLUMN asignacion_id DROP DEFAULT;
       public               postgres    false    228    227    228            �           2604    24863    coordinaciones coordinacion_id    DEFAULT     �   ALTER TABLE ONLY public.coordinaciones ALTER COLUMN coordinacion_id SET DEFAULT nextval('public.coordinaciones_coordinacion_id_seq'::regclass);
 M   ALTER TABLE public.coordinaciones ALTER COLUMN coordinacion_id DROP DEFAULT;
       public               postgres    false    232    231    232            �           2604    24772    departamentos departamento_id    DEFAULT     �   ALTER TABLE ONLY public.departamentos ALTER COLUMN departamento_id SET DEFAULT nextval('public.departamentos_departamento_id_seq'::regclass);
 L   ALTER TABLE public.departamentos ALTER COLUMN departamento_id DROP DEFAULT;
       public               postgres    false    222    221    222            �           2604    24753 !   direccionesgenerales direccion_id    DEFAULT     �   ALTER TABLE ONLY public.direccionesgenerales ALTER COLUMN direccion_id SET DEFAULT nextval('public.direccionesgenerales_direccion_id_seq'::regclass);
 P   ALTER TABLE public.direccionesgenerales ALTER COLUMN direccion_id DROP DEFAULT;
       public               postgres    false    217    218    218            �           2604    24842    notificaciones notificacion_id    DEFAULT     �   ALTER TABLE ONLY public.notificaciones ALTER COLUMN notificacion_id SET DEFAULT nextval('public.notificaciones_notificacion_id_seq'::regclass);
 M   ALTER TABLE public.notificaciones ALTER COLUMN notificacion_id DROP DEFAULT;
       public               postgres    false    230    229    230            �           2604    24760    planteles plantel_id    DEFAULT     |   ALTER TABLE ONLY public.planteles ALTER COLUMN plantel_id SET DEFAULT nextval('public.planteles_plantel_id_seq'::regclass);
 C   ALTER TABLE public.planteles ALTER COLUMN plantel_id DROP DEFAULT;
       public               postgres    false    219    220    220            �           2604    24801    tareas tarea_id    DEFAULT     r   ALTER TABLE ONLY public.tareas ALTER COLUMN tarea_id SET DEFAULT nextval('public.tareas_tarea_id_seq'::regclass);
 >   ALTER TABLE public.tareas ALTER COLUMN tarea_id DROP DEFAULT;
       public               postgres    false    226    225    226            �           2604    24784    usuarios usuario_id    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN usuario_id SET DEFAULT nextval('public.usuarios_usuario_id_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN usuario_id DROP DEFAULT;
       public               postgres    false    224    223    224            U          0    24817    asignacionestareas 
   TABLE DATA           �   COPY public.asignacionestareas (asignacion_id, tarea_id, usuario_id, estatus_usuario, comentarios_usuario, fecha_asignacion) FROM stdin;
    public               postgres    false    228   we       Y          0    24860    coordinaciones 
   TABLE DATA           \   COPY public.coordinaciones (coordinacion_id, nombre_coordinacion, direccion_id) FROM stdin;
    public               postgres    false    232   Wg       O          0    24769    departamentos 
   TABLE DATA           Y   COPY public.departamentos (departamento_id, nombre_departamento, plantel_id) FROM stdin;
    public               postgres    false    222   tg       K          0    24750    direccionesgenerales 
   TABLE DATA           N   COPY public.direccionesgenerales (direccion_id, nombre_direccion) FROM stdin;
    public               postgres    false    218   �g       W          0    24839    notificaciones 
   TABLE DATA           s   COPY public.notificaciones (notificacion_id, tarea_id, usuario_id, mensaje, fecha_notificacion, leida) FROM stdin;
    public               postgres    false    230   ,h       M          0    24757 	   planteles 
   TABLE DATA           M   COPY public.planteles (plantel_id, nombre_plantel, direccion_id) FROM stdin;
    public               postgres    false    220   Ih       S          0    24798    tareas 
   TABLE DATA           ~   COPY public.tareas (tarea_id, creador_id, asunto, descripcion, fecha_creacion, fecha_entrega, prioridad, estatus) FROM stdin;
    public               postgres    false    226   �h       Q          0    24781    usuarios 
   TABLE DATA           q   COPY public.usuarios (usuario_id, nombre, correo, rol, plantel_id, departamento_id, coordinacion_id) FROM stdin;
    public               postgres    false    224   Mk       h           0    0 $   asignacionestareas_asignacion_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.asignacionestareas_asignacion_id_seq', 20, true);
          public               postgres    false    227            i           0    0 "   coordinaciones_coordinacion_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.coordinaciones_coordinacion_id_seq', 1, false);
          public               postgres    false    231            j           0    0 !   departamentos_departamento_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public.departamentos_departamento_id_seq', 9, true);
          public               postgres    false    221            k           0    0 %   direccionesgenerales_direccion_id_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.direccionesgenerales_direccion_id_seq', 1, true);
          public               postgres    false    217            l           0    0 "   notificaciones_notificacion_id_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.notificaciones_notificacion_id_seq', 1, false);
          public               postgres    false    229            m           0    0    planteles_plantel_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.planteles_plantel_id_seq', 3, true);
          public               postgres    false    219            n           0    0    tareas_tarea_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.tareas_tarea_id_seq', 33, true);
          public               postgres    false    225            o           0    0    usuarios_usuario_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.usuarios_usuario_id_seq', 90, true);
          public               postgres    false    223            �           2606    24827 *   asignacionestareas asignacionestareas_pkey 
   CONSTRAINT     s   ALTER TABLE ONLY public.asignacionestareas
    ADD CONSTRAINT asignacionestareas_pkey PRIMARY KEY (asignacion_id);
 T   ALTER TABLE ONLY public.asignacionestareas DROP CONSTRAINT asignacionestareas_pkey;
       public                 postgres    false    228            �           2606    24865 "   coordinaciones coordinaciones_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.coordinaciones
    ADD CONSTRAINT coordinaciones_pkey PRIMARY KEY (coordinacion_id);
 L   ALTER TABLE ONLY public.coordinaciones DROP CONSTRAINT coordinaciones_pkey;
       public                 postgres    false    232            �           2606    24774     departamentos departamentos_pkey 
   CONSTRAINT     k   ALTER TABLE ONLY public.departamentos
    ADD CONSTRAINT departamentos_pkey PRIMARY KEY (departamento_id);
 J   ALTER TABLE ONLY public.departamentos DROP CONSTRAINT departamentos_pkey;
       public                 postgres    false    222            �           2606    24755 .   direccionesgenerales direccionesgenerales_pkey 
   CONSTRAINT     v   ALTER TABLE ONLY public.direccionesgenerales
    ADD CONSTRAINT direccionesgenerales_pkey PRIMARY KEY (direccion_id);
 X   ALTER TABLE ONLY public.direccionesgenerales DROP CONSTRAINT direccionesgenerales_pkey;
       public                 postgres    false    218            �           2606    24848 "   notificaciones notificaciones_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT notificaciones_pkey PRIMARY KEY (notificacion_id);
 L   ALTER TABLE ONLY public.notificaciones DROP CONSTRAINT notificaciones_pkey;
       public                 postgres    false    230            �           2606    24762    planteles planteles_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.planteles
    ADD CONSTRAINT planteles_pkey PRIMARY KEY (plantel_id);
 B   ALTER TABLE ONLY public.planteles DROP CONSTRAINT planteles_pkey;
       public                 postgres    false    220            �           2606    24810    tareas tareas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.tareas
    ADD CONSTRAINT tareas_pkey PRIMARY KEY (tarea_id);
 <   ALTER TABLE ONLY public.tareas DROP CONSTRAINT tareas_pkey;
       public                 postgres    false    226            �           2606    24786    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (usuario_id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public                 postgres    false    224            �           2606    24828 3   asignacionestareas asignacionestareas_tarea_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignacionestareas
    ADD CONSTRAINT asignacionestareas_tarea_id_fkey FOREIGN KEY (tarea_id) REFERENCES public.tareas(tarea_id);
 ]   ALTER TABLE ONLY public.asignacionestareas DROP CONSTRAINT asignacionestareas_tarea_id_fkey;
       public               postgres    false    226    4776    228            �           2606    24833 5   asignacionestareas asignacionestareas_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.asignacionestareas
    ADD CONSTRAINT asignacionestareas_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(usuario_id);
 _   ALTER TABLE ONLY public.asignacionestareas DROP CONSTRAINT asignacionestareas_usuario_id_fkey;
       public               postgres    false    228    224    4774            �           2606    24866 /   coordinaciones coordinaciones_direccion_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.coordinaciones
    ADD CONSTRAINT coordinaciones_direccion_id_fkey FOREIGN KEY (direccion_id) REFERENCES public.direccionesgenerales(direccion_id);
 Y   ALTER TABLE ONLY public.coordinaciones DROP CONSTRAINT coordinaciones_direccion_id_fkey;
       public               postgres    false    4768    218    232            �           2606    24775 +   departamentos departamentos_plantel_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.departamentos
    ADD CONSTRAINT departamentos_plantel_id_fkey FOREIGN KEY (plantel_id) REFERENCES public.planteles(plantel_id);
 U   ALTER TABLE ONLY public.departamentos DROP CONSTRAINT departamentos_plantel_id_fkey;
       public               postgres    false    222    4770    220            �           2606    24849 +   notificaciones notificaciones_tarea_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT notificaciones_tarea_id_fkey FOREIGN KEY (tarea_id) REFERENCES public.tareas(tarea_id);
 U   ALTER TABLE ONLY public.notificaciones DROP CONSTRAINT notificaciones_tarea_id_fkey;
       public               postgres    false    230    226    4776            �           2606    24854 -   notificaciones notificaciones_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.notificaciones
    ADD CONSTRAINT notificaciones_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(usuario_id);
 W   ALTER TABLE ONLY public.notificaciones DROP CONSTRAINT notificaciones_usuario_id_fkey;
       public               postgres    false    230    224    4774            �           2606    24763 %   planteles planteles_direccion_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.planteles
    ADD CONSTRAINT planteles_direccion_id_fkey FOREIGN KEY (direccion_id) REFERENCES public.direccionesgenerales(direccion_id);
 O   ALTER TABLE ONLY public.planteles DROP CONSTRAINT planteles_direccion_id_fkey;
       public               postgres    false    220    4768    218            �           2606    24811    tareas tareas_creador_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tareas
    ADD CONSTRAINT tareas_creador_id_fkey FOREIGN KEY (creador_id) REFERENCES public.usuarios(usuario_id);
 G   ALTER TABLE ONLY public.tareas DROP CONSTRAINT tareas_creador_id_fkey;
       public               postgres    false    224    4774    226            �           2606    24792 &   usuarios usuarios_departamento_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_departamento_id_fkey FOREIGN KEY (departamento_id) REFERENCES public.departamentos(departamento_id);
 P   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_departamento_id_fkey;
       public               postgres    false    4772    224    222            �           2606    24787 !   usuarios usuarios_plantel_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_plantel_id_fkey FOREIGN KEY (plantel_id) REFERENCES public.planteles(plantel_id);
 K   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_plantel_id_fkey;
       public               postgres    false    220    4770    224            U   �  x��SAn�0<ӯ�bX�-:�E�	z�����Q�79�S���u(Ɇ��.
,@Iggv�E)�R�R<���\"��m��$+[���F��k��˳<Q�l?w$)��Ujˎt���NZ����'<�H�Z.E�*7wEyW�d�{�n�ղP���-��@����'�:`��4�����P�M�=.]�n��5��GI��Q���o	��d�ΰw�R��h#Pj3c��&>V_'a�����N�K��%=w����l��-���s7���0����������&L>z�B?����xP�΁�v�J�T5k���Ph�s�V07.�Q�I7�%x��Hn�aH��� .#5�O�ۤ�@)�΄GP:��dG�5��^c��E�;�Fs.�?��P�J�f������>׺�����6N ��#�qQ�����	ý@����qՊ�7�M7b�11�8���i��\,��Qx      Y      x������ � �      O   w   x���K
�0��u�>A v��R�*j��"���Mց���g�i(�%s��\C���ɢ=P�Ҥ��ˢ}�w5��2�ִ[�j�֯�s�Lku� F�b���� &<Ą�	1�7��GX      K   !   x�3�t�,JMN���SpO�K-J������ h�[      W      x������ � �      M   L   x�3��q�q�Q�ut	rTp���rVpvr���\}9���*݀�~�>>�@Qc$�Q��>@�=... �n~      S   �  x��TKn�0]ӧ�C�DZ�.h��"m�]u3���(E:�d$�M�]=�.֡d˲]n ���y��'���L���XZ*zk�����W�G��<m-P�Wk�*�X<�|r��-�ݟg]9Z�JՍWs�#�\0~�"��\�s��,c�G4��(��¶0ȭ��V8`�b"crY4mp$p#=�
U�*ԻzW��j,[핅��t��1���AC��pL	���<:�2�����
̔KBd�R�u��qmט����F8n=�CU&����P���2P�N�!>�(�6��ǀj�O)ȵ}@�*̽Suk({�]>C�,Y�w~�s(.������������*(L���S�Q��TU)Q��nE��/q�h�+�7���!��#�� � ?�+�LOc�;قz����T��$���e������^�-i�JL�7C��%��
Ӿ���]p�W+�U�gA�<�JdJ����(�28��e]8~W��FI5$C9�#<¦ѧV�W1|��w��'4JO�=#2#7�@��*��7�5lA�ڄ�&[G����b�o�SO���x��-��\�tAn^P3_7��q�6��	��c1Q,;L-r�̅�)��	�8��;���IbLs��0�ַ�N��<��8�g�"�V�h���l6��8-;      Q   �  x���Kn�@���)��bɻ&v�4H���2Z��SHu$�o�eY��X9Ŏ!�B���D~$'��0c��[�M�<��m��T��ȹ�+�����"*��=O?{�!�@]�!���s�<E-�'*o�~���e�1��cB�`�:Q�AQ(���k�ۢ܉g�b��"G]b*�R��n��_�Km�B�!/о���N�D�u(w���d�Bg"�	i�L�<��3f�XiddOY�e&�ќ*ev�ݑ�L "֊-UL&�+�����@}&'gIw��_ٍʶ�Kb��
��$���7�Ma�*��%����F[�5��9��R}X�D��*�����N��Xj�m�]9y���!,�J�R�J����:���ȴE�{��Px��C�1,u� �$�a�ì����t]�i�Ȫn��d5����De�JkQ�����Vu6�cݦ^��v��I���<!,%�C>��響��dw�%;g���2TWrҾsM�g`�Ʉ}��_�[A^h��(�q�#�� fZ�6HG^g��!�g�H�1[S+O��C
Ñ~����7�;5Ob8�븲պ�Yᎌa��l��\&!�$Z�E$Éۅ~!�V1+�藍��Ǥ�-�G�X���[ړӍ�2'��{k�a��f:����W�.�����/���Ok�T�T~��SG�yK-�x����+��     